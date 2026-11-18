"use client";

import { type FormEvent, useRef, useState } from "react";
import { Icon } from "./Icon";

const regions = ["서울", "경기·인천", "부산", "대구·경북", "경남·울산", "충청", "전라", "강원", "제주", "미정"];

export default function ConsultationForm() {
  const [phase, setPhase] = useState<"editing" | "sending" | "complete">("editing");
  const [error, setError] = useState("");
  const [receipt, setReceipt] = useState("");
  const attempt = useRef<{ signature: string; id: string } | null>(null);
  const sending = useRef(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;
    setError("");
    const form = new FormData(event.currentTarget);
    const value = (field: string) => String(form.get(field) ?? "").trim();
    const data = {
      name: value("name"), phone: value("phone").replace(/[\s()-]/g, ""),
      region: value("region"), beer: value("beer"), question: value("question"),
      consent: form.has("consent"),
    };
    if (!data.name || !/^(010\d{8}|01[16789]\d{7,8})$/.test(data.phone)) {
      setError("성함과 휴대폰 번호를 확인해 주세요.");
      return;
    }
    const signature = JSON.stringify(data);
    if (attempt.current?.signature !== signature) attempt.current = { signature, id: crypto.randomUUID() };

    sending.current = true;
    setPhase("sending");
    try {
      const response = await fetch("/api/consultations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, requestId: attempt.current.id }),
        signal: AbortSignal.timeout(16000),
      });
      const payload = await response.json();
      if (!response.ok || payload.success !== true || typeof payload.id !== "string") {
        setError(typeof payload.error === "string" ? payload.error : "접수에 실패했습니다. 잠시 후 다시 시도해 주세요.");
        setPhase("editing");
        return;
      }
      setReceipt(payload.id);
      setPhase("complete");
      attempt.current = null;
    } catch {
      setError("접수 결과를 확인하지 못했습니다. 입력하신 내용으로 다시 시도해 주세요.");
      setPhase("editing");
    } finally {
      sending.current = false;
    }
  }

  return <div className="consult-card">
    <h3>지점 상담 문의하기</h3>
    {phase === "complete" ? <div className="form-success" role="status">
      <Icon name="check" size={30} /><strong>상담 문의가 접수됐습니다.</strong>
      <p>접수번호 <code>{receipt}</code></p>
      <button className="button button-yellow" type="button" onClick={() => setPhase("editing")}>새 문의 작성</button>
    </div> : <form onSubmit={submit}>
      <fieldset disabled={phase === "sending"}>
        <div className="form-grid">
          <label>성함<input autoComplete="name" name="name" maxLength={60} required /></label>
          <label>휴대폰 번호<input type="tel" inputMode="tel" autoComplete="tel-national" name="phone" maxLength={24} required placeholder="010-0000-0000" /></label>
          <label>창업 희망 지역<select name="region" defaultValue="" required><option value="" disabled>선택해 주세요</option>{regions.map((item) => <option key={item}>{item}</option>)}</select></label>
          <label>희망 맥주 종류<select name="beer" defaultValue=""><option value="">선택 사항</option><option>기린</option><option>아사히</option><option>두 가지 모두</option><option>미정</option></select></label>
        </div>
        <details className="form-optional"><summary>궁금한 점 남기기 (선택)</summary><label><span className="sr-only">문의 내용</span><textarea name="question" rows={3} maxLength={2000} /></label></details>
        <div className="form-consent"><label><input type="checkbox" name="consent" required /> 개인정보 수집·이용에 동의합니다.</label><a href="/privacy/" target="_blank" rel="noopener noreferrer">내용 보기</a></div>
      </fieldset>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="button button-yellow form-submit" type="submit" disabled={phase === "sending"}>{phase === "sending" ? "접수 중…" : "상담 신청"}</button>
    </form>}
  </div>;
}

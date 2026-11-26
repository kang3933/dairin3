import { Icon } from "./Icon";

export default function Footer() {
  return <footer className="footer"><div className="shell">
    <a className="footer-wordmark" href="/" aria-label="다이린 홈">DAIRIN</a>
    <nav className="footer-links" aria-label="하단 메뉴">
      <div><a href="/about/aboutdairin/"><strong>다이린 회사소개</strong></a><a href="/about/branches/">매장 안내</a></div>
      <div><strong>메뉴</strong><a href="/menu/new/">안주 메뉴</a><a href="/menu/beer/">맥주 메뉴</a></div>
      <div><strong>문의</strong><a href="/contact/consultation/">지점 상담 신청</a><a href="/contact/open/">지점 개설</a></div>
    </nav>
    <div className="footer-bottom-actions">
      <div style={{ display: "flex", gap: 8 }}>
        <a
          className="icon-button footer-contact"
          href="https://www.instagram.com/dairin_official/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="다이린 공식 인스타그램 (새 탭)"
        >
          <Icon name="instagram" size={28} />
        </a>

        <a
          className="icon-button footer-contact"
          href="/contact/consultation/"
          aria-label="지점 상담 문의하기"
        >
          <Icon name="headset" size={28} />
        </a>
      </div>
      <a className="button button-yellow" href="/contact/consultation/">지점 상담 문의</a>
    </div>
    <div className="footer-meta"><div><a href="/terms/">이용약관</a><a href="/privacy/">개인정보처리방침</a></div><small>© 2026 DAIRIN. All rights reserved.</small></div>
  </div></footer>;
}

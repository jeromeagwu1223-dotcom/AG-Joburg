import Link from 'next/link';
import Image from 'next/image';
import Icon from './Icon';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="agk-footer">
      <div className="agk-container agk-footer__inner">
        <div className="agk-footer__brand">
          <Image
            className="agk-footer__logo"
            src="/assets/logo-on-dark.svg"
            alt="AG Joburg"
            width={320}
            height={96}
            style={{ height: '64px', width: 'auto' }}
          />
          <p className="agk-footer__tag">
            All Grounds Joburg. A single number for renovations, repairs and
            everything in between — across greater Joburg.
          </p>
          <div className="agk-footer__social">
            <a aria-label="Facebook" href="#" rel="noopener noreferrer">
              <Icon name="facebook" size={18} color="#FFFFFF" strokeWidth={1.75} />
            </a>
            <a aria-label="Instagram" href="#" rel="noopener noreferrer">
              <Icon name="instagram" size={18} color="#FFFFFF" strokeWidth={1.75} />
            </a>
          </div>
        </div>

        <div className="agk-footer__col">
          <div className="agk-footer__h">Services</div>
          <Link href="/services">Damp &amp; Waterproofing</Link>
          <Link href="/services">Roofing</Link>
          <Link href="/services">Painting</Link>
          <Link href="/services">Kitchen &amp; Bathroom</Link>
          <Link href="/services">Paving</Link>
          <Link href="/services">Renovations &amp; Extensions</Link>
        </div>

        <div className="agk-footer__col">
          <div className="agk-footer__h">Company</div>
          <Link href="/about">About AG Joburg</Link>
          <Link href="/work">Our work</Link>
          <Link href="/contact">Contact</Link>
          <a href="#">Warranty terms</a>
          <a href="#">POPIA &amp; privacy</a>
        </div>

        <div className="agk-footer__col">
          <div className="agk-footer__h">Reach us</div>
          <div className="agk-footer__contact">
            <Icon name="phone" size={16} color="#FFFFFF" />
            <span>060 332 5955</span>
          </div>
          <div className="agk-footer__contact">
            <Icon name="mail" size={16} color="#FFFFFF" />
            <span>heyjeromeagwu@gmail.com</span>
          </div>
          <div className="agk-footer__contact">
            <Icon name="mapPin" size={16} color="#FFFFFF" />
            <span>97, 14th Ave, Northcliff</span>
          </div>
          <div className="agk-footer__contact">
            <Icon name="clock" size={16} color="#FFFFFF" />
            <span>Mon–Sat</span>
          </div>
        </div>
      </div>

      <div className="agk-footer__bottom">
        <div className="agk-container agk-footer__bottom-inner">
          <div>&copy; {year} AG Joburg. All rights reserved.</div>
          <div>One number. Every trade. All grounds covered.</div>
        </div>
      </div>
    </footer>
  );
}

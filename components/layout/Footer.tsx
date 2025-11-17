import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer-grid" aria-label="Footer">
      <div>
        <h4>Made in India</h4>
        <p>Crafted under the Make In India ethos with globally sourced notes.</p>
        <p>Business Address: Bandra Kurla Complex, Mumbai • +91 00000 00000</p>
      </div>
      <div>
        <h4>Compliance</h4>
        <ul>
          <li><Link href="/legal/privacy">Privacy Policy</Link></li>
          <li><Link href="/legal/terms">Terms & Conditions</Link></li>
          <li><Link href="/legal/shipping">Shipping Policy</Link></li>
          <li><Link href="/legal/cancellations">Cancellation & Refunds</Link></li>
        </ul>
      </div>
      <div>
        <h4>Social</h4>
        <ul>
          <li><Link href="/social">UGC & Social</Link></li>
          <li><Link href="/reviews">Reviews</Link></li>
          <li><Link href="/gallery">Influencer Gallery</Link></li>
          <li><Link href="/campaigns">Campaigns</Link></li>
        </ul>
      </div>
    </footer>
  );
}

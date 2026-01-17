import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — GOBAI Delivery App",
  description:
    "GOBAI Delivery App collects and uses data to operate rides, parcel, and food delivery services in the Philippines. Contact: adninonofre@gmail.com, Philippines.",
};

const infoItems = [
  {
    label: "Personal Information",
    details: [
      "Full name",
      "Mobile number",
      "Email address",
      "User role (Customer or Driver)",
      "Profile photo (optional)",
      "Government-issued ID (for driver verification, if required)",
    ],
  },
  {
    label: "Location Information",
    details: [
      "We collect real-time location data to match customers with nearby drivers, track deliveries, and calculate distances and delivery fees.",
      "Location data may be collected while the app is in use (foreground) and for active delivery or trip tracking.",
    ],
  },
  {
    label: "Transaction Information",
    details: [
      "Orders and deliveries",
      "Pickup and drop-off locations",
      "Payment amounts",
      "Platform fees",
      "Wallet points, rewards, and referral credits",
    ],
  },
  {
    label: "Device & Usage Information",
    details: [
      "Device type and operating system",
      "App version",
      "IP address",
      "Crash logs and performance data",
    ],
  },
  {
    label: "Referral Information",
    details: [
      "If you use a referral code, we record referral relationships and credit rewards based on completed transactions.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-8 px-4 py-12 text-[var(--text)]">
      <section className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--muted-text)]">
          Privacy Policy
        </p>
        <h1 className="text-3xl font-semibold">Privacy Policy</h1>
        <p className="text-lg">GOBAI Delivery App</p>
        <p className="text-sm text-[var(--muted-text)]">Last updated: December 2025</p>
        <p>
          GOBAI ("we", "our", or "us") operates a mobile application that connects customers,
          drivers, and merchants for delivery and on-demand services within the Philippines. We
          are committed to protecting your privacy and ensuring transparency in how your personal
          data is collected, used, and protected.
        </p>
        <p>
          By using the GOBAI app, you agree to the collection and use of information in
          accordance with this Privacy Policy.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Information We Collect</h2>
        <ol className="space-y-6 pl-6 text-[var(--text)]">
          {infoItems.map((item) => (
            <li key={item.label} className="space-y-2">
              <p className="font-semibold">{item.label}</p>
              <ul className="space-y-1 pl-4 list-disc text-sm text-[var(--muted-text)]">
                {item.details.map((detail) => (
                  <li key={detail}>
                    <p className="text-[var(--text)]">{detail}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
        <ul className="space-y-1 pl-4 list-disc text-sm text-[var(--text)]">
          <li>Provide and operate the GOBAI services</li>
          <li>Match customers with drivers</li>
          <li>Process deliveries and transactions</li>
          <li>Manage wallet points, platform fees, and referrals</li>
          <li>Send notifications and service updates</li>
          <li>Improve app performance and user experience</li>
          <li>Prevent fraud and abuse</li>
          <li>Comply with legal obligations</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Sharing of Information</h2>
        <p>We do not sell your personal data.</p>
        <p>We may share limited information only with:</p>
        <ul className="space-y-1 pl-4 list-disc text-sm text-[var(--text)]">
          <li>Drivers and customers involved in the same transaction</li>
          <li>Service providers (e.g. push notifications, mapping services)</li>
          <li>Government or legal authorities when required by law</li>
        </ul>
        <p>Shared data is limited to what is necessary to complete the service.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Wallets, Points, and Rewards</h2>
        <ul className="space-y-1 pl-4 list-disc text-sm text-[var(--text)]">
          <li>Drivers may load points to cover platform fees</li>
          <li>Points are deducted per completed transaction</li>
          <li>Referral and promotional rewards may be credited</li>
          <li>Customers may use reward points to offset delivery fees</li>
          <li>Wallet transactions are recorded for transparency and auditing</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Data Retention</h2>
        <p>
          We retain your data only as long as necessary to provide services, comply with legal
          requirements, and resolve disputes and enforce policies. You may request account
          deletion, subject to legal and operational requirements.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Data Security</h2>
        <p>
          We implement reasonable security measures to protect your data, including encrypted
          connections, restricted access to sensitive data, and secure servers and databases.
        </p>
        <p>However, no method of transmission over the internet is 100% secure.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Your Rights</h2>
        <ul className="space-y-1 pl-4 list-disc text-sm text-[var(--text)]">
          <li>Access your personal data</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your account (subject to legal limits)</li>
          <li>Withdraw consent for certain data processing</li>
        </ul>
        <p>Requests can be sent to the contact email below.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Children&apos;s Privacy</h2>
        <p>
          GOBAI is not intended for users under 18 years old. We do not knowingly collect data
          from minors.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted in the
          app or on this page with an updated date.
        </p>
      </section>

      <section className="space-y-2 border-t border-[var(--border)] pt-6">
        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <p>For questions, concerns, or data requests, contact us at:</p>
        <ul className="space-y-1 pl-4 text-sm text-[var(--text)]">
          <li>📧 adninonofre@gmail.com</li>
          <li>📍 Philippines</li>
        </ul>
      </section>
    </main>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delete Account — GOBAI Delivery App",
  description:
    "Request GOBAI account deletion via adninonofre@gmail.com. Once verified, deletion is processed within 7 business days and some records may be retained for up to 12 months.",
};

export default function DeleteAccountPage() {
  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-8 px-4 py-12 text-[var(--text)]">
      <section className="space-y-2">
        <h1 className="text-3xl font-semibold">GOBAI Account Deletion</h1>
        <p>
          Users may request deletion of their GOBAI account and associated personal data by contacting
          us.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How to request account deletion</h2>
        <p>Please send an email to:</p>
        <p className="font-mono text-sm">adninonofre@gmail.com</p>
        <p>
          with the subject: <span className="font-mono text-sm">Account Deletion Request</span>
        </p>
        <p>Include:</p>
        <ul className="space-y-2 pl-4 text-sm text-[var(--text)]">
          <li>Your registered email or mobile number</li>
          <li>Your GOBAI user role (Customer or Driver)</li>
          <li>
            What data will be deleted:
            <ul className="ml-4 list-disc space-y-1 text-[var(--muted-text)]">
              <li>Account profile information</li>
              <li>Contact details</li>
              <li>Location data</li>
              <li>Order and delivery history (subject to legal requirements)</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Data retention</h2>
        <p>Some transaction records may be retained for legal and regulatory purposes for up to 12 months.</p>
      </section>

      <section className="space-y-3">
        <p>Once the request is verified, account deletion will be processed within 7 business days.</p>
      </section>
    </main>
  );
}

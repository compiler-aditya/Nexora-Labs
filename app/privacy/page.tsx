export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: January 2024</p>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground mb-4">
              Welcome to Nexora Labs. We respect your privacy and are committed to protecting your personal data.
              This privacy policy will inform you about how we look after your personal data when you visit our
              website and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4">2. Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              We may collect, use, store and transfer different kinds of personal data about you:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Identity Data:</strong> First name, last name, username or similar identifier</li>
              <li><strong>Contact Data:</strong> Email address, telephone numbers, and billing address</li>
              <li><strong>Technical Data:</strong> Internet protocol (IP) address, browser type and version,
              time zone setting and location, operating system and platform</li>
              <li><strong>Usage Data:</strong> Information about how you use our website, products and services</li>
              <li><strong>Marketing Data:</strong> Your preferences in receiving marketing from us</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">
              We will only use your personal data when the law allows us to. Most commonly, we will use your
              personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>To provide and maintain our services</li>
              <li>To notify you about changes to our services</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information to improve our services</li>
              <li>To monitor the usage of our services</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4">4. Data Security</h2>
            <p className="text-muted-foreground mb-4">
              We have put in place appropriate security measures to prevent your personal data from being
              accidentally lost, used or accessed in an unauthorized way, altered or disclosed. We limit
              access to your personal data to those employees, agents, contractors and other third parties
              who have a business need to know.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4">5. Your Legal Rights</h2>
            <p className="text-muted-foreground mb-4">
              Under certain circumstances, you have rights under data protection laws in relation to your
              personal data, including the right to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Request access to your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Right to withdraw consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4">6. Cookies</h2>
            <p className="text-muted-foreground mb-4">
              We use cookies and similar tracking technologies to track the activity on our service and
              hold certain information. You can instruct your browser to refuse all cookies or to indicate
              when a cookie is being sent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4">7. Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-muted-foreground">
              Email: privacy@nexoralabs.com<br />
              Address: 123 Innovation Drive, Tech Valley, CA 94000
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

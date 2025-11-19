export default function TermsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-bold mb-8">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: January 2024</p>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground mb-4">
              By accessing or using our services, you agree to be bound by these Terms of Service and all
              applicable laws and regulations. If you do not agree with any of these terms, you are
              prohibited from using or accessing our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4">2. Use License</h2>
            <p className="text-muted-foreground mb-4">
              Permission is granted to temporarily access the materials on Nexora Labs' website for personal,
              non-commercial transitory viewing only. This is the grant of a license, not a transfer of title,
              and under this license you may not:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on our website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4">3. Services Description</h2>
            <p className="text-muted-foreground mb-4">
              Nexora Labs provides technology consulting, software development, and related services. We
              reserve the right to modify, suspend, or discontinue any part of our services at any time
              without prior notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4">4. User Responsibilities</h2>
            <p className="text-muted-foreground mb-4">
              As a user of our services, you agree to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
              <li>Not use our services for any illegal or unauthorized purpose</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4">5. Intellectual Property</h2>
            <p className="text-muted-foreground mb-4">
              The materials on Nexora Labs' website are protected by applicable copyright and trademark law.
              All intellectual property rights in our services and technology remain the property of Nexora Labs
              or our licensors.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4">6. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-4">
              In no event shall Nexora Labs or its suppliers be liable for any damages (including, without
              limitation, damages for loss of data or profit, or due to business interruption) arising out
              of the use or inability to use our services, even if Nexora Labs has been notified of the
              possibility of such damage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4">7. Privacy</h2>
            <p className="text-muted-foreground mb-4">
              Your use of our services is also governed by our Privacy Policy. Please review our Privacy
              Policy to understand our practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4">8. Governing Law</h2>
            <p className="text-muted-foreground mb-4">
              These terms and conditions are governed by and construed in accordance with the laws of
              California and you irrevocably submit to the exclusive jurisdiction of the courts in that
              State or location.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4">9. Changes to Terms</h2>
            <p className="text-muted-foreground mb-4">
              We reserve the right to modify these terms at any time. We will notify users of any material
              changes by posting the new Terms of Service on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4">10. Contact Information</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-muted-foreground">
              Email: legal@nexoralabs.com<br />
              Address: 123 Innovation Drive, Tech Valley, CA 94000
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

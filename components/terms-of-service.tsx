import React from "react";
import { Container } from "./container";

export function TermsOfService() {
  return (
    <Container className="py-12 md:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-6">Last updated: March 12, 2025</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p>
            Welcome to ABRA AI Consulting. These terms and conditions outline the rules and regulations for the use of our website.
          </p>
          <p>
            By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use our website if you do not accept all of the terms and conditions stated on this page.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. License to Use Website</h2>
          <p>
            Unless otherwise stated, ABRA AI Consulting and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved.
          </p>
          <p>
            You may view and/or print pages from the website for your own personal use subject to restrictions set in these terms and conditions.
          </p>
          <p>You must not:</p>
          <ul className="list-disc pl-6 my-4">
            <li>Republish material from this website</li>
            <li>Sell, rent or sub-license material from this website</li>
            <li>Reproduce, duplicate or copy material from this website</li>
            <li>Redistribute content from this website</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Content</h2>
          <p>
            In these terms and conditions, "User Content" means material (including without limitation text, images, audio material, video material and audio-visual material) that you submit to this website, for whatever purpose.
          </p>
          <p>
            You grant to ABRA AI Consulting a worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate and distribute your User Content in any existing or future media. You also grant to ABRA AI Consulting the right to sub-license these rights, and the right to bring an action for infringement of these rights.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Limitation of Liability</h2>
          <p>
            The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, ABRA AI Consulting:
          </p>
          <ul className="list-disc pl-6 my-4">
            <li>excludes all representations and warranties relating to this website and its contents or which is or may be provided by any affiliates or any other third party, including in relation to any inaccuracies or omissions in this website and/or the Company&apos;s literature; and</li>
            <li>excludes all liability for damages arising out of or in connection with your use of this website.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Indemnity</h2>
          <p>
            You hereby indemnify ABRA AI Consulting and undertake to keep ABRA AI Consulting indemnified against any losses, damages, costs, liabilities and expenses (including without limitation legal expenses and any amounts paid by ABRA AI Consulting to a third party in settlement of a claim or dispute on the advice of ABRA AI Consulting&apos;s legal advisers) incurred or suffered by ABRA AI Consulting arising out of any breach by you of any provision of these terms and conditions.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Breaches of These Terms and Conditions</h2>
          <p>
            Without prejudice to ABRA AI Consulting&apos;s other rights under these terms and conditions, if you breach these terms and conditions in any way, ABRA AI Consulting may take such action as ABRA AI Consulting deems appropriate to deal with the breach, including suspending your access to the website, prohibiting you from accessing the website, blocking computers using your IP address from accessing the website, contacting your internet service provider to request that they block your access to the website and/or bringing court proceedings against you.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Variation</h2>
          <p>
            ABRA AI Consulting may revise these terms and conditions from time-to-time. Revised terms and conditions will apply to the use of this website from the date of the publication of the revised terms and conditions on this website. Please check this page regularly to ensure you are familiar with the current version.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <p className="mt-2">
            <strong>Email:</strong> legal@abraaiconsulting.com<br />
            <strong>Address:</strong> ABRA AI Consulting, 123 AI Street, Tech City, TC 12345
          </p>
        </div>
      </div>
    </Container>
  );
}
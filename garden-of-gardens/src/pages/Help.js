import React from 'react';

const Help = () => {
  return (
    <div className="help-page">
      <h1>Help & Support</h1>
      <p>If you need assistance or have questions, please check our FAQs below:</p>
      <ul>
        <li>
          <strong>Q: How do I create an account?</strong>
          <p>A: You can create an account by visiting our registration page and filling out the required information.</p>
        </li>
        <li>
          <strong>Q: How do I reset my password?</strong>
          <p>A: If you forget your password, you can reset it by clicking the "Forgot Password" link on the login page.</p>
        </li>
        <li>
          <strong>Q: How do I contact customer support?</strong>
          <p>A: You can reach our customer support team by emailing support@example.com or calling +1 (123) 456-7890.</p>
        </li>
      </ul>
    </div>
  );
};

export default Help;

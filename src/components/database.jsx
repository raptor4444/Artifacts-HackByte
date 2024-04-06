import React from "react";

const Contact = () => {
  return (
    <div className="Contact">
      <main>
        <h1>Contact</h1>
        <form>
          <div>
            <label>Name</label>
            <input type="text" required placeholder="Your Name" />
          </div>

          <div>
            <label>Email</label>
            <input type="email" required placeholder="ABC@mail.com" />
          </div>

          <div>
            <label>Message</label>
            <input type="text" required placeholder="Any query.." />
          </div>
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;

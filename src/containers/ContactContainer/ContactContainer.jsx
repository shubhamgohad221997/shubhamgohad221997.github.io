import React from "react";
import { contactData } from "../../portfolioData";


import "./ContactContainer.css";
import { Gitstat } from "./GitHub";

export default function ContactContainer() {
  return (
    <section
      className="contact padding-top-bottom custom__outline text-center"
      id={contactData.id}
    >
      <div className="container">
      <h1>Github Calendar</h1>
      <div><img className="github1" src="data:image/png;base64,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" alt="" /></div>
        <div className="mk1"><Gitstat/></div>
        <h2
          className="h2__style text-uppercase d-inline-block position-relative custom__underline mb-5"
          data-title={contactData.contactText}
        >
          {contactData.contactText}
        </h2>
        <form
          className="my__form form-row mt-5 "
          method="POST"
          name="contact__main"
        >
          <input type="hidden" name="form-name" value="contact__main" />
          <p className="hidden">
            <label>
              Don’t fill this out if you're human: <input name="bot-field" />
            </label>
          </p>
          <div className=" col-lg-6 ">
            <div className="input-group ">
              <p className="hidden">
                <label>
                  Don’t fill this out if you're human:{" "}
                  <input name="bot-field" />
                </label>
              </p>
              <label htmlFor="username" className="sr-only">
                {contactData.inputName}
              </label>
              <input
                className="w-100 my-2 form-control"
                id="username"
                type="text"
                name="YourName"
                placeholder={contactData.inputName}
              />
            </div>
            <div className="input-group">
              <label htmlFor="email" className="sr-only">
                {contactData.inputEmail}
              </label>
              <input
                className="w-100 my-2 form-control"
                id="email"
                type="email"
                name="Email"
                placeholder={contactData.inputEmail}
              />
            </div>
            <div className="input-group">
              <label htmlFor="subject" className="sr-only">
                {contactData.inputSubject}
              </label>
              <input
                className="w-100 my-2 form-control mb-lg-0"
                id="subject"
                type="text"
                name="Subject"
                placeholder={contactData.inputSubject}
              />
            </div>
          </div>
          <div className=" col-lg-6 ">
            <div className="input-group h-100 textarea__group">
              <label htmlFor="message" className="sr-only">
                {contactData.textArea}
              </label>
              <textarea
                className="w-100 p-3 form-control "
                id="message"
                name="message"
                placeholder={contactData.textArea}
              ></textarea>
            </div>
          </div>
          <div className="input-group justify-content-start">
            <button
              type="submit"
              className="m-1 my-2 custom__submit mt-5 position-relative "
            >
              {contactData.submitButton}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

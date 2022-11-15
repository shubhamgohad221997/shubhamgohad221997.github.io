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
      <div>
        <img className="github1" src="data:image/png;base64,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" alt="" />
      </div>
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

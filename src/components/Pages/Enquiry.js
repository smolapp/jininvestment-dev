import React, { useCallback, useEffect, useReducer, useState } from "react";
import {
  Field,
  MaterialCubicBezier,
  PageWrapper,
  PrimaryColor,
  SubmitButton,
  Wrapper,
} from "../../GlobalStyled";
import styled from "styled-components";
import axios from "axios";
import cogoToast from "cogo-toast";

function Page() {
  const [data, setData] = useReducer(
    (prevState, updatedProperty) => ({
      ...prevState,
      ...updatedProperty,
    }),
    {
      name: "",
      email: "",
      subject: "",
      contact: "",
      company: "",
      message: "",
    }
  );

  const doSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, contact, company, file, message } = data;

    const postBody = {
      name: "Jin Investment",
      subject: `Enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nContact: ${contact}\nCompany: ${company}\nMessage: ${message}`,
      hash: {
        iv: "db94db3d50ec4e87fd411372919f74be",
        content: "11f6b4384fd208cc523051d60e823f63131819",
      },
      //   {
      //   iv: "8465a761fced18dc780be6b72010b816",
      //   content: "d6878c80f0819476e8c8c35019edbf675a8687d2b3243577f0552d",
      // },
    };

    const postData = JSON.stringify(postBody);
    const options = {
      headers: { "content-type": "application/json" },
    };

    axios
      .post("https://node-mailer-zeta.vercel.app/api/mail", postData, options)
      .then((res) => {
        console.log(res);
        cogoToast.success("Enquiry Sent!");
      })
      .catch((err) => {
        console.log(err);
        cogoToast.failed("Enquiry failed to sent!");
      });
  };

  useEffect(() => {
    document.title = "Jin Investment - Enquiries";
  }, []);

  return (
    <PageWrapper>
      <Wrapper>
        <div className="page-content">
          <div className="text">
            <h2>Enquiries</h2>
            <p>
              8 Eu Tong Sen Street #14-89, The Central, Singapore 059818 (Tower
              1)
              <br />
              Main: +65 6713 9670 &nbsp; | &nbsp; Fax: +65 6222 8953
              <br />
              <a
                className="link"
                href="https://www.google.com.sg/maps/place/8+Eu+Tong+Sen+St,+Singapore+059818/@1.2885249,103.8467874,17z/data=!3m1!4b1!4m2!3m1!1s0x31da190a9a635a7f:0x7d5110f413b57769"
                target="_blank"
              >
                View Map on Google
              </a>
            </p>
            <Field>
              <input
                placeholder="Name*"
                value={data.name}
                onChange={(e) => {
                  console.log(e.currentTarget.value);
                  setData({
                    name: e.currentTarget.value,
                  });
                }}
              />
            </Field>
            <Field>
              <input
                placeholder="Email*"
                value={data.email}
                onChange={(e) => {
                  console.log(e.currentTarget.value);
                  setData({
                    email: e.currentTarget.value,
                  });
                }}
              />
            </Field>
            <Field>
              <input
                placeholder="Subject*"
                value={data.subject}
                onChange={(e) => {
                  console.log(e.currentTarget.value);
                  setData({
                    subject: e.currentTarget.value,
                  });
                }}
              />
            </Field>
            <Field>
              <input
                placeholder="Sontact No.*"
                value={data.contact}
                onChange={(e) => {
                  console.log(e.currentTarget.value);
                  setData({
                    contact: e.currentTarget.value,
                  });
                }}
              />
            </Field>
            <Field>
              <input
                placeholder="Company Name"
                value={data.company}
                onChange={(e) => {
                  console.log(e.currentTarget.value);
                  setData({
                    company: e.currentTarget.value,
                  });
                }}
              />
            </Field>
            <Field>
              <textarea
                placeholder="Message"
                value={data.message}
                onChange={(e) => {
                  console.log(e.currentTarget.value);
                  setData({
                    message: e.currentTarget.value,
                  });
                }}
              />
            </Field>
            <SubmitButton onClick={doSubmit}>Submit</SubmitButton>
          </div>
          <div className="image">
            <img
              src={require("../../images/enquiries.png").default}
              alt="image"
            />
          </div>
        </div>
      </Wrapper>
    </PageWrapper>
  );
}

export default Page;

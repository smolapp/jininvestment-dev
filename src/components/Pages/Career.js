import React, { useCallback, useEffect, useReducer, useState } from "react";
import {
  Field,
  MaterialCubicBezier,
  PageWrapper,
  PrimaryColor, SubmitButton,
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
      file: "",
      message: "",
    }
  );

  const doSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, contact, company, file, message } = data;

    const postBody = {
      name: "Jin Investment",
      subject: `Enquiry from ${name}`,
      attachment: file,
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
    document.title = "Jin Investment - Career Opportunities";
  }, []);

  return (
    <PageWrapper>
      <Wrapper>
        <div className="page-content">
          <div className="text">
            <h2>Career Opportunities</h2>
            <p>
              Jin Investment Management is always looking for talented
              individuals to help grow our firm on the operations and investment
              side. On the investment side we seek fluent bilingual speakers of
              Japanese and English who are passionate about markets. The
              candidate must have a strong background in fundamental analysis as
              well as a deep knowledge of Japanese listed companies. On the
              operations side we seek applicants who have a solid knowledge base
              of operations and compliance in an investment management
              environment. The candidate must have a willingness to learn and an
              attention to detail. If you have any interest please send your
              resumé with a cover letter using the form below.
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
              <input type="file" />
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
              src={require("../../images/management.png").default}
              alt="image"
            />
          </div>
        </div>
      </Wrapper>
    </PageWrapper>
  );
}

export default Page;

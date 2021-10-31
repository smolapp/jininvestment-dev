import React, { useEffect, useReducer, useState } from "react";
import {MaterialCubicBezier, PageWrapper, PrimaryColor, Wrapper} from "../../GlobalStyled";
import styled from "styled-components";
import axios from "axios";

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

  const doSubmit = () => {
    const {name, email, subject, contact, company, message, file} = data

    const postBody = {
      name: "Jin Investment",
      subject: `Enquiry from ${name}`,
      attachment: file,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nContact: ${contact}\nCompany: ${company}\nMessage: ${message}`,
      hash: {
        iv: "8465a761fced18dc780be6b72010b816",
        content: "d6878c80f0819476e8c8c35019edbf675a8687d2b3243577f0552d",
      },
    };

    // try {
    //   axios.post("https://node-mailer-zeta.vercel.app/api/mail", {
    //     postBody,
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //   jQuery.ajax({
    //     type: "POST",
    //     url: "https://node-mailer-zeta.vercel.app/api/mail",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     data: JSON.stringify(data),
    //     success: function (response) {
    //       console.log(response);
    //     },
    //   });
    //
    //   jQuery.ajax({
    //     type: "POST",
    //     url: "https://api.airtable.com/v0/appKTJPdcoWumfV8g/Career?maxRecords=3&view=Grid%20view",
    //     headers: {
    //       Authorization: "Bearer keyosMjJvjEiXY7fU",
    //       "Content-Type": "application/json",
    //     },
    //     data: JSON.stringify(postBody),
    //     success: function (response) {
    //       console.log(response);
    //     },
    //   });
    //
    //   Toastify({
    //     text: "Enquiry sent!",
    //     duration: 3000,
    //   }).showToast();
    //
    //   isAllowed = false;
    // } catch (e) {
    //   Toastify({
    //     text: "Sent failed!",
    //     duration: 3000,
    //   }).showToast();
    //   isAllowed = true;
    // }
  }

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
            <SubmitButton>
              Submit
            </SubmitButton>
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

const Field = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  min-height: 40px;
  background-color: rgb(251, 252, 252);
  margin-bottom: 12px;
  input,
  textarea {
    height: 100%;
    min-height: 40px;
    width: 100%;
    padding-left: 20px;
    border: 0;
    outline: none;
    border-radius: 4px;
    background-color: transparent;
  }
  
  textarea {
    max-width: 100%;
    min-width: 100%;
    min-height: 100px;
  }
`;

const SubmitButton = styled.button`
  padding: 12px 24px;
  border-radius: 4px;
  background-color: ${PrimaryColor};
  color: #fff;
  font-family: "Open Sans", sans-serif;
  border: 0;
  outline: none;
`

export default Page;

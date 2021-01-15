import React from "react"
import styled from "styled-components"
import EmailBg from "../assets/contact/email.jpg"
import { Button } from "../components/Button"

const Email = () => {
  return (
    <EmailContainer>
      <EmailContent>
        <h1>Get Access to Exclusive Offers</h1>
        <p>
          Sign up below to get free suggestions on your first asset plan!
        </p>
        <FormWrap>
          <form action="#">
            <label htmlFor="email">
              <input type="email" placeholder="Enter your email" id="email" />
            </label>
            <Button as="button" type="submit" primary="true"
            css={`
                height: 48px;
                @media screen and (max-width: 768px) {
                    width: 90%;
                    min-width: 350px;
                }

                @media screen and (max-width: 400px) {
                    width: 90%;
                    min-width: 250px;
                }
            `}
            >Sign Up</Button>
          </form>
        </FormWrap>
      </EmailContent>
    </EmailContainer>
  )
}

export default Email

const EmailContainer = styled.div `
    background: linear-gradient(180deg, 
    rgba(0,0,0,0.5) 0%, 
    rgba(0,0,0,0.5) 35%,
    rgba(0,0,0,0.1) 100%
    ), url(${EmailBg}) no-repeat center;
    background-size: cover;
    height: 450px;
    width: 100%;
    padding: 5rem 0;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`

const EmailContent = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        text-align: center;
        margin-bottom: 1rem;
        font-size: clamp(1rem, 5vw, 3rem);
        padding: 0 1rem;
    }

    p {
        text-align: center;
        font-size: clamp(1rem, 2.5vw, 1.5rem);
        padding: 0 1rem;
        margin-bottom: 2rem;
    }

    form {
        z-index: 10;
    }
`
const FormWrap = styled.div `
    input {
        padding: 1rem 1.5rem;
        outline: none;
        width: 340px;
        height: 28px;
        border-radius: 24px;
        border: none;
        margin-right: 1rem;
    }

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 0 1rem;

        input {
            margin-bottom: 1rem;
            width: 90%;
        }
    }
`
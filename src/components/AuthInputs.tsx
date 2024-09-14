import React from "react";
import { useState } from "react";
import { styled } from "styled-components";

interface Props {
  $invalid?: boolean;
  className?: string;
}

type InputProps = Props;
type LabelProps = Props;

const ControlContainer = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Label = styled.label<LabelProps>`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ $invalid }) => ($invalid ? "#f87171" : "#6b7280")};
`;

const Input = styled.input<InputProps>`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  background-color: ${({ $invalid }) => ($invalid ? "#fed2d2" : "#d1d5db")};
  color: ${({ $invalid }) => ($invalid ? "#ef4444" : " #374151")};
  border: ${({ $invalid }) => ($invalid ? "#f87171" : "#6b7280")} 1px solid
    transparent;
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

const AuthInputs: React.FC = () => {
  const [enteredEmail, setEnteredEmail] = useState<string>("");
  const [enteredPassword, setEnteredPassword] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleInputChange = (
    identifier: string,
    value: React.SetStateAction<string>
  ) => {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  };

  const handleLogin = () => {
    setSubmitted(true);
  };

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlContainer>
        <p>
          {/* <Label className={emailNotValid ? "invalid" : undefined}>Email</Label> */}

          {/* '$' sign is a prefix use for style-components props to avoid clashing of other built-in props */}
          <Label $invalid={emailNotValid}>Email</Label>
          <Input
            type="email"
            $invalid={emailNotValid}
            onChange={(event) => handleInputChange("email", event.target.value)}
            // className={emailNotValid ? "invalid" : undefined}
            // style={{ backgroundColor: emailNotValid ? "#ef4444" : "#d1d5db" }}
          />
        </p>
        <p>
          <Label
            // className={emailNotValid ? "invalid" : undefined}
            $invalid={emailNotValid}>
            Password
          </Label>
          <Input
            type="password"
            // className={passwordNotValid ? "invalid" : undefined}
            $invalid={emailNotValid}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p>
      </ControlContainer>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <button className="button" onClick={handleLogin}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default AuthInputs;

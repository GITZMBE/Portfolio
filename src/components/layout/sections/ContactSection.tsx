import { ContactForm, PageContainer } from "@/components";
import React, { ComponentPropsWithoutRef } from "react";

type IProps = ComponentPropsWithoutRef<"div">;

export const ContactSection = ({ ...props }: IProps) => {
  return (
    <PageContainer
      { ...props }
      id='contact-container'
      className={`snap-start ${ props.className }`}
    >
      <ContactForm />
    </PageContainer>
  );
}

export default ContactSection
;
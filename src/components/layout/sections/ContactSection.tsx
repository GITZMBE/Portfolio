import { ContactForm, PageContainer } from "@/components";
import React, { ComponentPropsWithRef } from "react";

type IProps = ComponentPropsWithRef<"div">;

export const ContactSection = ({ ...props }: IProps) => {
  return (
    <PageContainer
      { ...props }
      className={`snap-start ${ props.className }`}
    >
      <ContactForm />
    </PageContainer>
  );
}

export default ContactSection
;
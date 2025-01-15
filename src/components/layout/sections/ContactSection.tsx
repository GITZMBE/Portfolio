import { ContactForm, PageContainer } from "@/components";
import Image from "next/image";
import React, { ComponentPropsWithRef } from "react";

type IProps = ComponentPropsWithRef<"div">;

export const ContactSection = ({ ...props }: IProps) => {
  return (
    <PageContainer
      { ...props }
      className={`relative snap-start ${ props.className }`}
    >
      <ContactForm />
      <Image src={'/net.png'} width={1920} height={1080} className="absolute bottom-0 right-0 w-full h-full aspect-[1920/1080] object-cover object-right" priority alt="" />
      <div className="hidden sm:block absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary dark:from-darkPrimary to-transparent"></div>
    </PageContainer>
  );
}

export default ContactSection
;
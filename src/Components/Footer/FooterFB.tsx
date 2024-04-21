import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { BsDribbble, BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const FooterCustomTheme = {
  root: {
    base: "w-full bg-black shadow md:flex md:items-center md:justify-between",
    container: "w-full p-6",
  },
};
function FooterFB() {
  return (
    <Footer container className="bg-black" theme={FooterCustomTheme}>
      <div className="w-full px-4">
        <div className="grid w-full justify-between sm:flex sm:justify-center md:flex md:grid-cols-1 gap-4 pb-16 border-b border-gray-500">
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-5 sm:gap-6">
            <div>
              <FooterTitle
                title="Company"
                className="font-normal text-gray-50"
              />
              <FooterLinkGroup col className="text-white">
                <FooterLink href="#"></FooterLink>
                <FooterLink href="#">Tailwind CSS</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle
                title="Destinations"
                className="font-normal text-gray-50"
              />
              <FooterLinkGroup col className="text-white">
                <FooterLink href="#">Github</FooterLink>
                <FooterLink href="#">Discord</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle
                title="Useful Information"
                className="font-normal text-gray-50"
              />
              <FooterLinkGroup col className="text-white">
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Terms &amp; Conditions</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle
                title="Office Hours"
                className="font-normal text-gray-50"
              />
              <FooterLinkGroup col className="text-white">
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Terms &amp; Conditions</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle
                title="Contact Us"
                className="font-normal text-gray-50"
              />
              <FooterLinkGroup col className="text-white">
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Terms &amp; Conditions</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        {/* <FooterDivider /> */}
        <div className="flex justify-center -mt-5">
          <div className="flex gap-2 border-2 border-gray-400 p-2 rounded-full bg-black">
            <FooterIcon href="#" className="hover:text-white" icon={BsFacebook} />
            <FooterIcon href="#" className="hover:text-white"  icon={BsInstagram} />
          </div>
        </div>
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <img src="/images/logo/logo_blanco.png" className="h-20" alt="logo" />
          <FooterCopyright
            href="#"
            by="TripAlpaca"
            year={2024}
            className="text-white"
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <p className="text-white text-sm font-normal">
              Sitemap | Privacy Policy | Terms & Conditions | complaints
            </p>
          </div>
        </div>
      </div>
    </Footer>
  );
}
export default FooterFB;

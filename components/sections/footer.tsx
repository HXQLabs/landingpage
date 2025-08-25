import { Icons } from "@/components/utility/icons";
import { footerData } from "@/data";
import { InfiniteTextMarquee } from "../ui/infinite-text-marquee";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface SocialIcon {
  name: string;
  url: string;
  ariaLabel: string;
}

interface Footer2Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
  brandText?: string;
  socialIcons?: SocialIcon[];
}

const Footer2 = ({
  logo = footerData.logo,
  tagline = footerData.tagline,
  menuItems = footerData.menuItems,
  copyright = footerData.copyright,
  bottomLinks = footerData.bottomLinks,
  brandText = footerData.brandText,
  socialIcons = footerData.socialIcons,
}: Footer2Props) => {

  return (
    <section className="py-16 md:py-24 lg:py-32 relative bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <footer>
          {/* Main Footer Content */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
            {/* Logo + Tagline + Social icons */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1 space-y-6 lg:pr-8">
              <div className="flex items-center gap-3">
                {/* <Logo url={logo.url}>
                  <LogoImage
                    src={logo.src}
                    alt={logo.alt}
                    title={logo.title}
                    className="h-8 w-8 md:h-10 md:w-10"
                  />
                  <LogoText className="text-lg md:text-xl font-bold">
                    {logo.title}
                  </LogoText>
                </Logo> */}
              </div>

              <p className="text-muted-foreground text-sm md:text-base max-w-sm lg:max-w-none">
                {tagline}
              </p>

              {/* Social icons */}
              <div className="flex items-center gap-2">
                {socialIcons.map((social, idx) => {
                  const IconComponent = Icons[social.name as keyof typeof Icons];
                  return (
                    <a
                      key={idx}
                      aria-label={social.ariaLabel}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-muted rounded-md"
                    >
                      <IconComponent className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Navigation sections */}
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx} className="space-y-4">
                <h3 className="font-semibold text-foreground text-sm md:text-base">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href={link.url}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm block"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <p className="text-muted-foreground text-xs md:text-sm">
                {copyright}
              </p>
              <div className="flex flex-wrap gap-4 sm:gap-6">
                {bottomLinks.map((link, linkIdx) => (
                  <a
                    key={linkIdx}
                    href={link.url}
                    className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>

        {/* Large brand text with diagonal hatch shading - improved mobile sizing */}
        {/* <div className="mt-12 md:mt-16 lg:mt-20 flex justify-center pointer-events-none select-none"> */}
          {/* <h2
            className="
              text-[4rem] xs:text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[12rem] xl:text-[15rem] 2xl:text-[18rem]
              font-bold tracking-tight leading-none
              text-transparent
              bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.06)_0,rgba(0,0,0,0.06)_2px,transparent_2px,transparent_8px)]
              dark:bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0.06)_2px,transparent_2px,transparent_10px)]
              bg-clip-text
              break-all sm:break-normal
            "
            style={{ WebkitBackgroundClip: "text" }}
          >
            {brandText}
          </h2> */}

<InfiniteTextMarquee
  text="STARTUP"
  link="#"
  speed={50}
  tooltipText="It is Amazing!! 🤩🔥"
  fontSize="8rem"
  textColor="bg-foreground"
  hoverColor="red"
  showTooltip={true}
/>
        {/* </div> */}
      </div>
    </section>
  );
};

export { Footer2 };

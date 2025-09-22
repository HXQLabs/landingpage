// import Link from "next/link";



// import Container from "../global/container";
// import Icons from "../global/icons";
// import { PulsatingIndicator } from "@/components/utils/pulsating-indicator";
// import CenterUnderline from "../fancy/text/underline-center";

// const StickyFooter = () => {
//     return (
//         <footer className="flex flex-col relative items-center justify-center border-t border-foreground/5 pt-16 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32">
//             <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">
//                 <Container>
//                     <div className="flex flex-col items-start justify-start md:max-w-[200px]">
//                         <div className="flex items-center gap-2">
//                             <Icons.icon className="w-auto h-5" />
//                             <span className="text-base md:text-lg font-medium text-foreground">
//                                 HelixQue
//                             </span>
//                         </div>
//                         <p className="text-muted-foreground mt-4 text-sm text-start">
//                             Building the future with innovative solutions and cutting-edge technology.
//                         </p>
                        
//                         {/* All Systems Operational Status */}
//                         <div className="mt-4">
//                             <Link 
//                                 href="/status"
//                                 className="inline-flex items-center space-x-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors duration-200 text-sm font-medium px-3 py-2 border border-green-200 dark:border-green-800 rounded-lg hover:border-green-300 dark:hover:border-green-700"
//                             >
//                                 <PulsatingIndicator 
//                                     variant="success" 
//                                     size="sm" 
//                                     animate={true}
//                                     duration={2000}
//                                 />
//                                 <span>All Systems Operational</span>
//                             </Link>
//                         </div>

//                         {/* Social Links */}
//                         <div className="flex items-center space-x-4 mt-4">
//                             <Link
//                                 href="https://discord.gg/your-server"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="text-muted-foreground hover:text-[#5865F2] transition-colors duration-200"
//                                 aria-label="Join our Discord"
//                             >
//                                 <Icons.discord className="h-5 w-5" />
//                             </Link>
//                             <Link
//                                 href="https://github.com/your-org"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="text-muted-foreground hover:text-foreground transition-colors duration-200"
//                                 aria-label="Follow us on GitHub"
//                             >
//                                 <Icons.github className="h-5 w-5" />
//                             </Link>
//                             <Link
//                                 href="https://hacktoberfest.com"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="text-muted-foreground hover:text-[#FF6B35] transition-colors duration-200"
//                                 aria-label="Hacktoberfest"
//                             >
//                                 <Icons.hacktoberfest className="h-5 w-5" />
//                             </Link>
//                         </div>
//                     </div>
//                 </Container>

//                 <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
//                     <div className="md:grid md:grid-cols-2 md:gap-8">
//                         <Container delay={0.1} className="h-auto">
//                             <h3 className="text-base font-medium text-foreground">
//                                 Product
//                             </h3>
//                             <ul className="mt-4 text-sm text-muted-foreground space-y-4">
//                                 <li className="mt-2">
//                                     <Link href="#" className="link hover:text-foreground transition-all duration-300">
//                                         <CenterUnderline>Features</CenterUnderline>
//                                     </Link>
//                                 </li>
//                                 <li className="mt-2">
//                                     <Link href="#" className="link hover:text-foreground transition-all duration-300">
//                                         <CenterUnderline>Pricing</CenterUnderline>
//                                     </Link>
//                                 </li>
//                                 <li className="mt-2">
//                                     <Link href="#" className="link hover:text-foreground transition-all duration-300">
//                                         <CenterUnderline>Documentation</CenterUnderline>
//                                     </Link>
//                                 </li>
//                                 <li className="mt-2">
//                                     <Link href="#" className="link hover:text-foreground transition-all duration-300">
//                                         <CenterUnderline>Integrations</CenterUnderline>
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </Container>
//                         <Container delay={0.2} className="h-auto">
//                             <div className="mt-10 md:mt-0 flex flex-col">
//                                 <h3 className="text-base font-medium text-foreground">
//                                     Solutions
//                                 </h3>
//                                 <ul className="mt-4 text-sm text-muted-foreground space-y-4">
//                                     <li>
//                                         <Link href="#" className="link hover:text-foreground transition-all duration-300">
//                                             <CenterUnderline>Developers</CenterUnderline>
//                                         </Link>
//                                     </li>
//                                     <li className="mt-2">
//                                         <Link href="#" className="link hover:text-foreground transition-all duration-300">
//                                             <CenterUnderline>Businesses</CenterUnderline>
//                                         </Link>
//                                     </li>
//                                     <li className="mt-2">
//                                         <Link href="#" className="link hover:text-foreground transition-all duration-300">
//                                             <CenterUnderline>Startups</CenterUnderline>
//                                         </Link>
//                                     </li>
//                                     <li className="mt-2">
//                                         <Link href="#" className="link hover:text-foreground transition-all duration-300">
//                                             <CenterUnderline>Enterprise</CenterUnderline>
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </Container>
//                     </div>
//                     <div className="md:grid md:grid-cols-2 md:gap-8">
//                         <Container delay={0.3} className="h-auto">
//                             <h3 className="text-base font-medium text-foreground">
//                                 Resources
//                             </h3>
//                             <ul className="mt-4 text-sm text-muted-foreground space-y-4">
//                                 <li className="mt-2">
//                                     <Link href="/blog" className="link hover:text-foreground transition-all duration-300">
//                                         <CenterUnderline>Blog</CenterUnderline>
//                                     </Link>
//                                 </li>
//                                 <li className="mt-2">
//                                     <Link href="/changelog" className="link hover:text-foreground transition-all duration-300">
//                                         <CenterUnderline>Changelog</CenterUnderline>
//                                     </Link>
//                                 </li>
//                                 <li className="mt-2">
//                                     <Link href="#" className="link hover:text-foreground transition-all duration-300">
//                                         <CenterUnderline>Support</CenterUnderline>
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </Container>
//                         <Container delay={0.4} className="h-auto">
//                             <div className="mt-10 md:mt-0 flex flex-col">
//                                 <h3 className="text-base font-medium text-foreground">
//                                     Company
//                                 </h3>
//                                 <ul className="mt-4 text-sm text-muted-foreground space-y-4">
//                                     <li>
//                                         <Link href="#" className="link hover:text-foreground transition-all duration-300">
//                                             <CenterUnderline>About Us</CenterUnderline>
//                                         </Link>
//                                     </li>
//                                     <li className="mt-2">
//                                         <Link href="#" className="link hover:text-foreground transition-all duration-300">
//                                             <CenterUnderline>Privacy Policy</CenterUnderline>
//                                         </Link>
//                                     </li>
//                                     <li className="mt-2">
//                                         <Link href="#" className="link hover:text-foreground transition-all duration-300">
//                                             <CenterUnderline>Terms & Conditions</CenterUnderline>
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </Container>
//                     </div>
//                 </div>
//             </div>

//             <Container delay={0.5} className="w-full relative mt-12 lg:mt-20">
//                 <div className="mt-8 md:flex md:items-center justify-center footer w-full">
//                     <p className="text-sm text-muted-foreground mt-8 md:mt-0">
//                         &copy; {new Date().getFullYear()} HelixQue. All rights reserved.
//                     </p>
//                 </div>
//             </Container>
//         </footer>
//     )
// };

// export default StickyFooter;


import Link from "next/link";
import Container from "../global/container";
import Icons from "../global/icons";
import { PulsatingIndicator } from "@/components/utils/pulsating-indicator";

const StickyFooter = () => {
  return (
    <footer className="flex flex-col relative items-center justify-center border-t border-foreground/5 pt-16 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32">
      <div className="grid gap-4 xl:grid-cols-3 xl:gap-4 w-full">
        {/* Brand + Social Links */}
        <Container>
          <div className="flex flex-col items-start justify-start md:max-w-[200px]">
            <div className="flex items-center gap-2">
              <Icons.icon className="w-auto h-5" />
              <span className="text-base md:text-lg font-medium text-foreground">
                HelixQue
              </span>
            </div>
            <p className="text-muted-foreground mt-4 text-sm text-start">
              Building the future with innovative solutions and cutting-edge technology.
            </p>

            {/* All Systems Operational Status */}
            <div className="mt-4">
              <Link
                href="/status"
                className="inline-flex items-center space-x-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors duration-200 text-sm font-medium px-3 py-2 border border-green-200 dark:border-green-800 rounded-lg hover:border-green-300 dark:hover:border-green-700"
              >
                <PulsatingIndicator
                  variant="success"
                  size="sm"
                  animate={true}
                  duration={2000}
                />
                <span>All Systems Operational</span>
              </Link>
            </div>
          </div>
        </Container>

        {/* Footer Nav + Media */}
        <div className="grid grid-cols-2 gap-1 xl:col-span-2 xl:mt-0">
          {/* Navigation Section */}
          <Container delay={0.1} className="h-auto">
            <h3 className="text-base font-medium text-foreground">Navigation</h3>
            <ul className="mt-4 text-sm text-muted-foreground space-y-4">
              <li>
                <Link href="/" className="link hover:text-foreground transition-all duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/docs" className="link hover:text-foreground transition-all duration-300">
                  Docs
                </Link>
              </li>
              <li>
                <Link href="/components" className="link hover:text-foreground transition-all duration-300">
                  Comps
                </Link>
              </li>
            </ul>
          </Container>

          {/* Media Section */}
          <Container delay={0.2} className="h-auto">
            <h3 className="text-base font-medium text-foreground">Media</h3>
            <ul className="mt-4 text-sm text-muted-foreground space-y-4">
              <li>
                <Link
                  href="https://github.com/your-org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link hover:text-foreground transition-all duration-300 flex items-center gap-2"
                >
                  Github
                </Link>
              </li>
              <li>
                <Link
                  href="https://discord.gg/your-server"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link hover:text-[#5865F2] transition-all duration-300 flex items-center gap-2"
                >
                  
                  Discord
                </Link>
              </li>
              <li>
                <Link
                  href="https://hacktoberfest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link hover:text-[#FF6B35] transition-all duration-300 flex items-center gap-2"
                >
                  
                  Hacktoberfest
                </Link>
              </li>
            </ul>
          </Container>
        </div>
      </div>

      {/* Footer Bottom */}
      <Container delay={0.5} className="w-full relative mt-12 lg:mt-20">
        <div className="mt-8 md:flex md:items-center justify-center footer w-full">
          <p className="text-sm text-muted-foreground mt-8 md:mt-0">
            &copy; {new Date().getFullYear()} HXQLabs. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default StickyFooter;


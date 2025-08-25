// "use client";

// import { useState } from "react";
// import WorldMap from "@/components/ui/world-map";

// export interface ContactProps {
//   title?: string;
//   description?: string;
//   email?: string;
//   phone?: string;
//   supportEmail?: string;
// }

// interface FormData {
//   name: string;
//   email: string;
//   company: string;
//   message: string;
// }

// export function Contact({
//   title = "Contact us",
//   description = "We are always looking for ways to improve our products and services. Contact us and let us know how we can help you.",
//   email = "contact@yoursaas.ai",
//   phone = "+1 (800) 123 XX21",
//   supportEmail = "support@yoursaas.ai"
// }: ContactProps) {
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     company: "",
//     message: ""
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { id, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [id]: value
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate form submission
//     try {
//       console.log("Form submitted:", formData);
//       // Here you would typically send the data to your backend
//       await new Promise(resolve => setTimeout(resolve, 1000));
      
//       // Reset form after successful submission
//       setFormData({
//         name: "",
//         email: "",
//         company: "",
//         message: ""
//       });
      
//       alert("Thank you for your message! We'll get back to you soon.");
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("There was an error submitting your message. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };
//   return (
//     <div className="preview flex min-h-[350px] w-full justify-center p-2 sm:p-10 items-center">
//       <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 py-10 md:px-6 md:py-20 lg:grid-cols-2">
//         {/* Left Column - Contact Info */}
//         <div className="relative flex flex-col items-center overflow-hidden lg:items-start">
//           {/* Icon Container */}
//           <div className="flex items-start justify-start">
//             <div className="relative h-14 w-14 rounded-md bg-gradient-to-b from-gray-50 to-neutral-200 p-[4px] dark:from-neutral-800 dark:to-neutral-950 flex items-center justify-center overflow-hidden">
//               <div className="relative z-20 h-full w-full rounded-[5px] bg-gray-50 dark:bg-neutral-800 flex items-center justify-center overflow-hidden">
//                 <svg 
//                   xmlns="http://www.w3.org/2000/svg" 
//                   width="24" 
//                   height="24" 
//                   viewBox="0 0 24 24" 
//                   fill="none" 
//                   stroke="currentColor" 
//                   strokeWidth="2" 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round" 
//                   className="h-6 w-6 text-blue-500"
//                 >
//                   <path 
//                     d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" 
//                     fill="currentColor" 
//                     strokeWidth="0"
//                   />
//                   <path 
//                     d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" 
//                     fill="currentColor" 
//                     strokeWidth="0"
//                   />
//                 </svg>
//               </div>
//               <div className="absolute inset-x-0 bottom-0 z-30 mx-auto h-4 w-full rounded-full bg-neutral-600 opacity-50 blur-lg" />
//               <div className="absolute inset-x-0 bottom-0 mx-auto h-px w-[60%] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
//               <div className="absolute inset-x-0 bottom-0 mx-auto h-px w-[60%] bg-gradient-to-r from-transparent via-blue-600 to-transparent dark:h-[8px] dark:blur-sm" />
//             </div>
//           </div>

//           {/* Title */}
//           <h2 className="mt-9 bg-gradient-to-b from-neutral-800 to-neutral-900 bg-clip-text text-left text-xl font-bold text-transparent md:text-3xl lg:text-5xl dark:from-neutral-200 dark:to-neutral-300">
//             {title}
//           </h2>

//           {/* Description */}
//           <p className="mt-8 max-w-lg text-center text-base text-neutral-600 md:text-left dark:text-neutral-400">
//             {description}
//           </p>

//           {/* Contact Information */}
//           <div className="mt-10 hidden flex-col items-center gap-4 md:flex-row lg:flex">
//             <p className="text-sm text-neutral-500 dark:text-neutral-400">{email}</p>
//             <div className="h-1 w-1 rounded-full bg-neutral-500 dark:bg-neutral-400" />
//             <p className="text-sm text-neutral-500 dark:text-neutral-400">{phone}</p>
//             <div className="h-1 w-1 rounded-full bg-neutral-500 dark:bg-neutral-400" />
//             <p className="text-sm text-neutral-500 dark:text-neutral-400">{supportEmail}</p>
//           </div>

//           {/* World Map Visualization */}
//           <div className="relative mt-20 w-full max-w-4xl">
//             {/* WorldMap Component with India Point */}
//             <div className="relative">
//               <WorldMap
//                 dots={[
//                   {
//                     start: { lat: 20.5937, lng: 78.9629, label: "India" }, // India coordinates
//                     end: { lat: 20.5937, lng: 78.9629, label: "India" }, // Same point for single location
//                   },
//                 ]}
//                 lineColor="#3b82f6"
//               />

//               {/* Floating indicator positioned over India */}
//               <div 
//                 className="pointer-events-none absolute z-[60] flex items-center justify-center opacity-100 transition duration-500" 
//                 style={{ 
//                   left: "71.875%", // Approximate position of India on the map (575/800 = 71.875%)
//                   top: "38.5%",    // Approximate position of India on the map (154/400 = 38.5%)
//                   transform: "translate(-50%, -100%)" 
//                 }}
//               >
//                 <div className="flex flex-col items-center">
//                   {/* Badge */}
//                   <div className="inline-block rounded-lg bg-neutral-200 px-2 py-1 text-xs font-normal text-neutral-700 dark:bg-neutral-800 dark:text-white mb-2">
//                     We are here
//                     <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-blue-400/0 via-blue-400/90 to-blue-400/0 transition-opacity duration-500" />
//                   </div>

//                   {/* Vertical line pointing to India */}
//                   <div className="relative">
//                     <div className="h-12 w-px bg-gradient-to-b from-transparent to-blue-500 blur-[1px]" />
//                     <div className="absolute top-0 left-0 h-12 w-px bg-gradient-to-b from-transparent to-blue-500" />
//                     <div className="absolute bottom-0 left-1/2 h-[4px] w-[4px] -translate-x-1/2 rounded-full bg-blue-600 blur-[2px]" />
//                     <div className="absolute bottom-0 left-1/2 h-[2px] w-[2px] -translate-x-1/2 rounded-full bg-blue-300" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Column - Contact Form */}
//         <form onSubmit={handleSubmit} className="relative mx-auto flex w-full max-w-2xl flex-col items-start gap-4 overflow-hidden rounded-3xl bg-gradient-to-b from-gray-100 to-gray-200 p-4 sm:p-10 dark:from-neutral-900 dark:to-neutral-950">
//           {/* Background Pattern */}
//           <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
//             <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/30 to-zinc-900/30 opacity-10 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 dark:to-zinc-900/30">
//               <svg aria-hidden="true" className="absolute inset-0 h-full w-full fill-black/100 stroke-black/100 mix-blend-overlay dark:fill-white/100 dark:stroke-white/100">
//                 <defs>
//                   <pattern id="contact-pattern" width="20" height="20" patternUnits="userSpaceOnUse" x="-12" y="4">
//                     <path d="M.5 20V.5H20" fill="none" />
//                   </pattern>
//                 </defs>
//                 <rect width="100%" height="100%" strokeWidth="0" fill="url(#contact-pattern)" />
//                 <svg x="-12" y="4" className="overflow-visible">
//                   <rect strokeWidth="0" width="21" height="21" x="140" y="120" />
//                   <rect strokeWidth="0" width="21" height="21" x="140" y="60" />
//                   <rect strokeWidth="0" width="21" height="21" x="200" y="100" />
//                   <rect strokeWidth="0" width="21" height="21" x="180" y="60" />
//                   <rect strokeWidth="0" width="21" height="21" x="160" y="40" />
//                 </svg>
//               </svg>
//             </div>
//           </div>

//           {/* Form Fields */}
//           <div className="relative z-20 mb-4 w-full">
//             <label className="mb-2 inline-block text-sm font-medium text-neutral-600 dark:text-neutral-300" htmlFor="name">
//               Full name
//             </label>
//             <input 
//               id="name" 
//               value={formData.name}
//               onChange={handleInputChange}
//               placeholder="Manu Arora" 
//               className="shadow-input h-10 w-full rounded-md border border-transparent bg-white pl-4 text-sm text-neutral-700 placeholder-neutral-500 outline-none focus:ring-2 focus:ring-neutral-800 focus:outline-none active:outline-none dark:border-neutral-800 dark:bg-neutral-800 dark:text-white" 
//               type="text"
//               required
//             />
//           </div>

//           <div className="relative z-20 mb-4 w-full">
//             <label className="mb-2 inline-block text-sm font-medium text-neutral-600 dark:text-neutral-300" htmlFor="email">
//               Email Address
//             </label>
//             <input 
//               id="email" 
//               value={formData.email}
//               onChange={handleInputChange}
//               placeholder="support@aceternity.com" 
//               className="shadow-input h-10 w-full rounded-md border border-transparent bg-white pl-4 text-sm text-neutral-700 placeholder-neutral-500 outline-none focus:ring-2 focus:ring-neutral-800 focus:outline-none active:outline-none dark:border-neutral-800 dark:bg-neutral-800 dark:text-white" 
//               type="email"
//               required
//             />
//           </div>

//           <div className="relative z-20 mb-4 w-full">
//             <label className="mb-2 inline-block text-sm font-medium text-neutral-600 dark:text-neutral-300" htmlFor="company">
//               Company
//             </label>
//             <input 
//               id="company" 
//               value={formData.company}
//               onChange={handleInputChange}
//               placeholder="Aceternity Labs LLC" 
//               className="shadow-input h-10 w-full rounded-md border border-transparent bg-white pl-4 text-sm text-neutral-700 placeholder-neutral-500 outline-none focus:ring-2 focus:ring-neutral-800 focus:outline-none active:outline-none dark:border-neutral-800 dark:bg-neutral-800 dark:text-white" 
//               type="text" 
//             />
//           </div>

//           <div className="relative z-20 mb-4 w-full">
//             <label className="mb-2 inline-block text-sm font-medium text-neutral-600 dark:text-neutral-300" htmlFor="message">
//               Message
//             </label>
//             <textarea 
//               id="message" 
//               value={formData.message}
//               onChange={handleInputChange}
//               rows={5} 
//               placeholder="Type your message here" 
//               className="shadow-input w-full rounded-md border border-transparent bg-white pt-4 pl-4 text-sm text-neutral-700 placeholder-neutral-500 outline-none focus:ring-2 focus:ring-neutral-800 focus:outline-none active:outline-none dark:border-neutral-800 dark:bg-neutral-800 dark:text-white"
//               required
//             />
//           </div>

//           <button 
//             type="submit"
//             disabled={isSubmitting}
//             className="relative z-10 flex items-center justify-center rounded-md border border-transparent bg-neutral-800 px-4 py-2 text-sm font-medium text-white shadow-[0px_1px_0px_0px_#FFFFFF20_inset] transition duration-200 hover:bg-neutral-900 disabled:opacity-50 disabled:cursor-not-allowed md:text-sm"
//           >
//             {isSubmitting ? "Submitting..." : "Submit"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Contact;

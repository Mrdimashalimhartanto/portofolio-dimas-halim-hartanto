"use client";

import React from "react";
import Image from "next/image";
import Dimas from "../images/foto-dimas.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  //   AnnotationIcon,
  GlobeAltIcon,
  //   LightningBoltIcon,
  //   MailIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";

const About = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 150,
    });
  });
  const stats = [
    { label: "Founded", value: "2021" },
    { label: "Employees", value: "5" },
    { label: "Beta Users", value: "521" },
    { label: "Raised", value: "$25M" },
  ];

  const products = [
    {
      id: 1,
      name: "Fusion",
      category: "UI Kit",
      href: "#",
      price: "$49",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-01.jpg",
      imageAlt:
        "Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.",
    },
    {
      id: 1,
      name: "Fusion",
      category: "UI Kit",
      href: "#",
      price: "$49",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-01.jpg",
      imageAlt:
        "Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.",
    },
    {
      id: 1,
      name: "Fusion",
      category: "UI Kit",
      href: "#",
      price: "$49",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-01.jpg",
      imageAlt:
        "Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.",
    },
    {
      id: 1,
      name: "Fusion",
      category: "UI Kit",
      href: "#",
      price: "$49",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-01.jpg",
      imageAlt:
        "Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.",
    },
  ];

  const navigation = [
    {
      name: "Facebook",
      href: "#",
      icon: (
        props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
      ) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (
        props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
      ) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#",
      icon: (
        props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
      ) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "#",
      icon: (
        props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
      ) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Dribbble",
      href: "#",
      icon: (
        props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
      ) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  const transferFeatures = [
    {
      id: 1,
      name: "Competitive exchange rates",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: GlobeAltIcon,
    },
    {
      id: 2,
      name: "No hidden fees",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: ScaleIcon,
    },
    // {
    //   id: 3,
    //   name: "Transfers are instant",
    //   description:
    //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    //   icon: LightningBoltIcon,
    // },
  ];
  const communicationFeatures = [
    {
      id: 1,
      name: "Mobile notifications",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      //   icon: AnnotationIcon,
    },
    {
      id: 2,
      name: "Reminder emails",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      //   icon: MailIcon,
    },
  ];

  return (
    <>
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1536148935331-408321065b18?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="background"
          />
          <div className="absolute inset-0 bg-white bg-opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-gray-800" />
          <div
            className="absolute inset-0 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
            Get in touch
          </h1>
          {/* <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text sm:text-5xl lg:text-6xl">
            Get in touch
          </h1> */}
          <p className="mt-6 text-xl text-white max-w-3xl">
            Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque
            lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut
            consectetur. Sit justo viverra non adipisicing elit distinctio.
          </p>
        </div>
      </div>
      {/* Tentang Saya */}
      <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <svg
            className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
            />
          </svg>

          <div className="relative mt-6 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h3 className="text-[24px] font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                Dimas Halim Hartanto
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                Hallo, Selamat datang di portofolio saya! Saya Dimas Halim
                Hartanto, seorang profesional berusia 27 tahun yang bergerak
                dalam dunia pengembangan web dan desain UI/UX. Dengan pengalaman
                yang kuat dalam bidang ini, saya telah menghasilkan beberapa
                aplikasi yang informatif dan berguna untuk kebutuhan user.
              </p>

              <dl className="mt-14 space-y-10">
                <h3 className="text-[24px] font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                  Pengalaman Bekerja
                </h3>
                <ol className="relative border-s border-gray-200 dark:border-gray-700">
                  <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      February 2022
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Application UI code in Tailwind CSS
                    </h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                      Get access to over 20+ pages including a dashboard layout,
                      charts, kanban board, calendar, and pre-order E-commerce &
                      Marketing pages.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    >
                      Learn more{" "}
                      <svg
                        className="w-3 h-3 ms-2 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      March 2022
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Marketing UI design in Figma
                    </h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      All of the pages and components are first designed in
                      Figma and we keep a parity between the two versions even
                      as we update the project.
                    </p>
                  </li>
                  <li className="ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      April 2022
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      E-Commerce UI code in Tailwind CSS
                    </h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Get started with dozens of web components and interactive
                      elements built on top of Tailwind CSS.
                    </p>
                  </li>
                </ol>
              </dl>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
              <svg
                className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
              >
                <defs>
                  <pattern
                    id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={784}
                  height={404}
                  fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
                />
              </svg>
              <Image
                className="relative mx-auto rounded-[20px] shadow-sm"
                width={340}
                height={340}
                src={Dimas}
                alt="Dimas Halim"
              />
            </div>
          </div>

          <svg
            className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
            />
          </svg>
        </div>
      </div>
      {/* CTA */}
      <div className="bg-gradient-to-r from-[#164e63] from-20% via-[#d4d4d8] to-[#d4d4d8]">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            <span className="block text-white">
              Start your free trial today.
            </span>
          </h2>
        </div>
      </div>
      <br />
      {/* Project */}
      <div className="bg-white relative overflow-hidden">
        {/* Decorative background image and gradient */}
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute inset-0 max-w-7xl mx-auto overflow-hidden xl:px-8">
            {/* image background */}
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-02-sale-full-width.jpg"
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-white bg-opacity-75" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white" />
        </div>

        {/* Callout */}
        <section
          aria-labelledby="sale-heading"
          className="relative max-w-7xl mx-auto pt-32 px-4 flex flex-col items-center text-center sm:px-6 lg:px-8"
        >
          <div className="max-w-2xl mx-auto lg:max-w-none">
            <h2
              id="sale-heading"
              className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
            >
              Get 25% off during our one-time sale
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-xl text-gray-600">
              Most of our products are limited releases that won't come back.
              Get your favorite items while they're in stock.
            </p>
            <a
              href="#"
              className="mt-6 inline-block w-full bg-gray-900 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-gray-800 sm:w-auto"
            >
              Get access to our one-time sale
            </a>
          </div>
        </section>

        {/* Testimonials */}
        <section
          aria-labelledby="testimonial-heading"
          className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:py-32 lg:px-8"
        >
          <div className="max-w-2xl mx-auto lg:max-w-none">
            <div className="bg-white">
              <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                  {/* PROJECT 1  */}
                  <div>
                    <div className="relative">
                      <div className="relative w-full h-72 rounded-lg overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="project 1"
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="relative mt-4">
                        <h3 className="text-sm font-bold text-gray-900">
                          Project 1
                        </h3>
                      </div>
                      <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                        <div
                          aria-hidden="true"
                          className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                        />
                        <p className="relative text-lg font-semibold text-white">
                          Project Test 1
                        </p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <button className="relative flex bg-[#164e63] rounded-md py-2 px-8 items-center justify-center text-sm font-bold text-white hover:bg-red-600">
                        View detail
                        <span className="sr-only">, test product</span>
                      </button>
                    </div>
                  </div>
                  {/* PROJECT 2  */}
                  <div>
                    <div className="relative">
                      <div className="relative w-full h-72 rounded-lg overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="project 1"
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="relative mt-4">
                        <h3 className="text-sm font-bold text-gray-900">
                          Project 1
                        </h3>
                      </div>
                      <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                        <div
                          aria-hidden="true"
                          className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                        />
                        <p className="relative text-lg font-semibold text-white">
                          Project Test 1
                        </p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <button className="relative flex bg-[#164e63] rounded-md py-2 px-8 items-center justify-center text-sm font-bold text-white hover:bg-red-600">
                        View detail
                        <span className="sr-only">, test product</span>
                      </button>
                    </div>
                  </div>
                  {/* PROJECT 3 */}
                  <div>
                    <div className="relative">
                      <div className="relative w-full h-72 rounded-lg overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="project 1"
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="relative mt-4">
                        <h3 className="text-sm font-bold text-gray-900">
                          Project 1
                        </h3>
                      </div>
                      <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                        <div
                          aria-hidden="true"
                          className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                        />
                        <p className="relative text-lg font-semibold text-white">
                          Project Test 1
                        </p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <button className="relative flex bg-[#164e63] rounded-md py-2 px-8 items-center justify-center text-sm font-bold text-white hover:bg-red-600">
                        View detail
                        <span className="sr-only">, test product</span>
                      </button>
                    </div>
                  </div>
                  {/* PROJECT 4 */}
                  <div>
                    <div className="relative">
                      <div className="relative w-full h-72 rounded-lg overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="project 1"
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="relative mt-4">
                        <h3 className="text-sm font-bold text-gray-900">
                          Project 1
                        </h3>
                      </div>
                      <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                        <div
                          aria-hidden="true"
                          className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                        />
                        <p className="relative text-lg font-semibold text-white">
                          Project Test 1
                        </p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <button className="relative flex bg-[#164e63] rounded-md py-2 px-8 items-center justify-center text-sm font-bold text-white hover:bg-red-600">
                        View detail
                        <span className="sr-only">, test product</span>
                      </button>
                    </div>
                  </div>
                  {/* {products.map((product) => (
                    <div key={product.id}>
                      <div className="relative">
                        <div className="relative w-full h-72 rounded-lg overflow-hidden">
                          <img
                            src=""
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="relative mt-4">
                          <h3 className="text-sm font-medium text-gray-900">
                            {product.name}
                          </h3>
                        </div>
                        <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                          <div
                            aria-hidden="true"
                            className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                          />
                          <p className="relative text-lg font-semibold text-white">
                            {product.price}
                          </p>
                        </div>
                      </div>
                      <div className="mt-6">
                        <button className="relative flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md py-2 px-8 items-center justify-center text-sm font-bold text-white hover:bg-red-600">
                          Detail Project
                          <span className="sr-only">, {product.name}</span>
                        </button>
                      </div>
                    </div>
                  ))} */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#164e63] from-20% via-[#d4d4d8] to-[#d4d4d8]">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-gray-800"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-white font-extrabold">
              &copy; 2020 Workflow, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default About;

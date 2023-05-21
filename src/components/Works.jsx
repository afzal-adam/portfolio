import React from "react";

const Works = () => {
  return (
    <>
      <div>
        <section className="bg-base-300 mb-5 ">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-10 lg:px-2">
            <div className="mx-auto max-w-screen-sm text-center">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-primary ">
                Some of My Selected Works!
              </h2>
              <p className="mb-3 font-normal text-base-content  md:text-sm">
                Some of my Work For Clients From Various Domains and
                Requirements, few Projects Cannot be Refferenced an they are
                Enterprise Management Solutions.
              </p>
            </div>
          </div>
        </section>
        <div>
          <section className="bg-base-100 w-full max-w-5xl m-auto">
            <div className="gap-8 items-center py-8 px-4 mx-auto w-full xl:gap-16 md:grid md:grid-cols-2 sm:py-5 lg:px-6">
              <img
                className="w-full max-w-md"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
                alt="dashboard image"
              />

              <div className="mt-4 md:mt-0">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-base-content ">
                  Let's create more tools and ideas that brings us together.
                </h2>
                <p className="mb-6 font-light text-base-content md:text-lg ">
                  Flowbite helps you connect with friends and communities of
                  people who share your interests. Connecting with your friends
                  and family as well as discovering new ones is easy with
                  features like Groups.
                </p>
              </div>
            </div>
          </section>
          <section className="bg-base-100 w-full max-w-5xl m-auto">
            <div className="gap-8 items-center py-8 px-4 mx-auto w-full xl:gap-16 md:grid md:grid-cols-2 sm:py-5 lg:px-6">
              <img
                className="w-full max-w-md order-2"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
                alt="dashboard image"
              />

              <div className="mt-4 md:mt-0 order-1">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-base-content ">
                  Let's create more tools and ideas that brings us together.
                </h2>
                <p className="mb-6 font-light text-base-content md:text-lg ">
                  Flowbite helps you connect with friends and communities of
                  people who share your interests. Connecting with your friends
                  and family as well as discovering new ones is easy with
                  features like Groups.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Works;

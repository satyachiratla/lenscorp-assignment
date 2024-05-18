export default function FAQs() {
  return (
    <div className="flex flex-col items-center dark:bg-black bg-white py-10 mx-4">
      <h2 className="text-2xl">GET TO KNOW US</h2>
      <div className="border h-1.5 rounded-full w-16 bg-gradient-to-r from-sky-500 to-cyan-300" />
      <h3 className="py-10 text-3xl md:text-5xl 2xl:text-4xl md:font-medium text-center">
        Frequently Asked Questions
      </h3>
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
        <div className="md:h-[400px]">
          <div className="join join-vertical w-full space-y-4">
            <div className="collapse collapse-arrow join-item border border-black dark:border-white max-w-2xl">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-lg font-medium">
                Do I need to sign a contract?
              </div>
              <div className="collapse-content">
                <p className="text-gray-500">
                  We will first work with you to comprehend your requirements in
                  detail. Thereafter, we would draft an agreement with proposed
                  solutions.After assessing possible challenges and pitfalls and
                  identifying ways to overcome them, we will jointly sign an
                  agreement, not a binding contract.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-black dark:border-white max-w-2xl">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-lg font-medium">
                How do we ensure quality of deliverables?
              </div>
              <div className="collapse-content">
                <p className="text-gray-500">
                  We are researchers, first. We thoroughly benchmark our
                  proposed solutions against internal and public datasets and
                  baselines after each development sprint. After final delivery,
                  we will continuously enhance our delivery based on your
                  feedbacks.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-black dark:border-white max-w-2xl">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-lg font-medium">
                How do I begin collaboration?
              </div>
              <div className="collapse-content">
                <p className="text-gray-500">
                  Please contact us at{" "}
                  <span className="link link-error">
                    solutions@lenscorp.ai.
                  </span>{" "}
                  We usually respond within 24 Hrs.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:h-[400px]">
          <div className="join join-vertical w-full space-y-4">
            <div className="collapse collapse-arrow join-item border border-black dark:border-white max-w-2xl">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-lg font-medium">
                What services do we offer?
              </div>
              <div className="collapse-content">
                <p className="text-gray-500">
                  We build accurate and efficient AI systems for your business.
                  Our ethically-trained solutions are paving a new path forward
                  to create explainable, transparent, and easily customizable.
                  In addition, we grant ownership of all copyrights to the
                  system, software, and model to you.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-black dark:border-white max-w-2xl">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-lg font-medium">
                How do you ensure user privacy?
              </div>
              <div className="collapse-content">
                <p className="text-gray-500">
                  We do not share, sell, or rent your competitive information
                  (including any and all data) to any third party.Since we grant
                  exclusive Intellectual Property Rights back to you, we have no
                  intention of violating any user privacy.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-black dark:border-white max-w-2xl">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-lg font-medium">
                How can I pay for the services?
              </div>
              <div className="collapse-content">
                <p className="text-gray-500">
                  We split the entire project into multiple milestones.We work
                  on an advanced milestone payment basis with an option to drop
                  off remaining milestones anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

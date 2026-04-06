import React, { useRef, useEffect, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Understand",
    description: "Research the problem, users, and goals.",
    image: "/01.png",
    imageStyle: {},
  },
  {
    number: "02",
    title: "Design",
    description: "Create wireframes and visual layouts.",
    image: "/02.png",
    imageStyle: {},
  },
  {
    number: "03",
    title: "Build",
    description: "Turn the design into functional code.",
    image: "/3.png",
    nextImage: "/4.png", // Replace this with the image you want for the second appearance
    imageStyle: { objectPosition: "left 20% top 10%" },
    nextImageStyle: { objectPosition: "center" }, // Optional style for the second appearance
  },
];

const IMAGE_COUNT = 2;
const STEP_SCROLL_VH = 300;

function StepLabel({ step, animClass }) {
  return (
    <div className={`absolute inset-0 flex flex-col gap-1 ${animClass}`}>
      <p className="text-xl text-gray">{step.number}</p>
      <h2 className="text-3xl font-medium">{step.title}</h2>
      <p className="text-base text-gray">{step.description}</p>
    </div>
  );
}

export default function Process() {
  const wrapperRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [stepProgress, setStepProgress] = useState(0);

  // For animated label transitions
  const [displayedStep, setDisplayedStep] = useState(0);
  const [prevStep, setPrevStep] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const totalHeight = wrapperRef.current.offsetHeight - window.innerHeight;
      const scrolled = Math.max(0, -rect.top);
      const totalProgress = Math.min(1, scrolled / totalHeight);

      const stepFloat = totalProgress * steps.length;
      const currentStep = Math.min(steps.length - 1, Math.floor(stepFloat));
      const progress = Math.min(1, stepFloat - currentStep);

      setActiveStep(currentStep);
      setStepProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Trigger label transition when activeStep changes
  useEffect(() => {
    if (activeStep === displayedStep) return;
    setPrevStep(displayedStep);
    setDisplayedStep(activeStep);
    const t = setTimeout(() => setPrevStep(null), 500);
    return () => clearTimeout(t);
  }, [activeStep]);

  const current = steps[displayedStep];

  return (
    <section id="process" className="mt-24 lg:mt-48">
      {/* Keyframe animations */}
      <style>{`
        @keyframes stepExit {
          from { opacity: 1; transform: translateY(0); }
          to   { opacity: 0; transform: translateY(-28px); }
        }
        @keyframes stepEnter {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .step-exit  { animation: stepExit  0.45s ease forwards; }
        .step-enter { animation: stepEnter 0.45s ease forwards; }
      `}</style>

      {/* Header */}
      <div className="mb-16">
        <h1 className="text-4xl leading-relaxed">How I work</h1>
        <p className="text-lg text-gray max-w-md mt-2">
          A simple approach I follow to turn ideas into working digital products.
        </p>
      </div>

      {/* Scroll zone */}
      <div
        ref={wrapperRef}
        style={{ height: `${STEP_SCROLL_VH * steps.length}vh` }}
      >
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="flex items-center gap-8 w-full h-full py-16">

            {/* Vertical progress bar */}
            <div className="flex-shrink-0 flex flex-col items-center h-full justify-center">
              {steps.map((step, i) => (
                <React.Fragment key={i}>
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0 transition-colors duration-500"
                    style={{ backgroundColor: i <= activeStep ? "#06b6d4" : "#e5e7eb" }}
                  />
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-gray-200 relative overflow-hidden">
                      <div
                        className="absolute top-0 left-0 w-full bg-[#06b6d4]"
                        style={{
                          height:
                            i < activeStep
                              ? "100%"
                              : i === activeStep
                              ? `${stepProgress * 100}%`
                              : "0%",
                          transition: "height 0.05s linear",
                        }}
                      />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Step label with enter/exit animations */}
            <div className="flex-shrink-0 w-52 relative" style={{ height: "120px" }}>
              {/* Exiting step */}
              {prevStep !== null && (
                <StepLabel
                  key={`exit-${prevStep}`}
                  step={steps[prevStep]}
                  animClass="step-exit"
                />
              )}
              {/* Entering step */}
              <StepLabel
                key={`enter-${displayedStep}`}
                step={current}
                animClass="step-enter"
              />
            </div>

            {/* Vertically scrolling text strip */}
            <div className="flex-1 overflow-hidden h-full rounded-2xl bg-gray-50 border border-gray-100">
              <div
                className="w-full h-full flex flex-col"
                style={{
                  transform: `translateY(calc(-${(activeStep === steps.length - 1 ? activeStep : activeStep + stepProgress) * 100}%))`,
                  willChange: "transform",
                }}
              >
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className="w-full h-full flex-shrink-0 flex items-center justify-center p-8 md:p-12"
                  >
                    <p className="text-xl md:text-2xl leading-relaxed text-gray-500 font-medium text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

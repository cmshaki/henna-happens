import { Disclosure, Transition } from "@headlessui/react";
import { ArrowLongDownIcon } from "@heroicons/react/24/outline";
import qa from "../../data/qa.json";
import randomAlphaNumeric from "src/utils/randomAlphaNumeric";

interface QAProps {
  sectionId: string;
  classes: string;
}

export default function QA({ sectionId, classes }: QAProps) {
  return (
    <section id={sectionId} className={classes}>
      <div className="mx-auto max-w-7xl px-5 sm:px-16">
        <h2 className="font-cinzel text-3xl sm:absolute sm:text-6xl">Q&A</h2>
      </div>
      <div className="mx-auto flex max-w-7xl grow justify-end px-5 sm:px-16">
        <div className="hidden flex-1 sm:block"></div>
        <ul className="right-0 flex-3">
          {qa.map((item, index) => (
            <Disclosure
              as="li"
              key={randomAlphaNumeric(4 + index)}
              className="relative flex flex-col justify-between py-6 sm:py-10 sm:after:absolute sm:after:bottom-0 sm:after:left-0 sm:after:right-0 sm:after:h-1 sm:after:w-120% sm:after:border-b sm:after:border-brand-button-disabled sm:after:content-['']"
            >
              <div className="inline-flex w-full">
                <Disclosure.Button className="inline-flex w-full justify-between text-left font-cinzel text-xl leading-none ui-open:text-brand-green sm:pointer-events-none sm:text-4xl">
                  <span className="pointer-events-auto">{item.question}</span>
                  <ArrowLongDownIcon className="pointer-events-auto inline h-8 shrink-0 ui-open:rotate-180 ui-open:text-brand-green" />
                </Disclosure.Button>
              </div>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="pt-5">
                  {item.answer.map((text, i) => (
                    <p
                      key={randomAlphaNumeric(4 + i)}
                      {...(i < item.answer.length - 1 && item.answer.length != 1
                        ? { className: "mb-5" }
                        : Object.create(null))}
                    >
                      {text}
                    </p>
                  ))}
                </Disclosure.Panel>
              </Transition>
            </Disclosure>
          ))}
        </ul>
      </div>
    </section>
  );
}

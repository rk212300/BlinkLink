import Button from "@/components/Button";
import Divider from "@/components/Divider";
import InputComponent from "@/components/InputComponent";
import { useState } from "react";

const CreateQR = () => {
    const [destination, setDestination] = useState("");
    const [title, setTitle] = useState("");

    return (
        <section className="h-full flex">
            <div className="w-3/5 h-full relative bg-white overflow-y-auto">
                <form action="" className="flex flex-col gap-6 mx-16">
                    <h1 className="font-bold text-4xl">Create a QR Code</h1>
                    <p className="font-light text-sm">
                        You can create <strong>2</strong> more QR Codes this
                        month.{" "}
                        <span className="underline cursor-pointer hover:text-violet-600 hover:no-underline">
                            Upgrade for more.
                        </span>
                    </p>
                    <div className="flex flex-col gap-3">
                        <p className="text-lg font-medium">Destination URL</p>
                        <InputComponent
                            label="Destination"
                            placeholder="https://example.com/my-long-url"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            className="text-base"
                        />
                        <p className="font-light text-sm">
                            You can create <strong>11</strong> more links this
                            month
                        </p>
                    </div>

                    <Divider />

                    <div className="flex flex-col gap-3">
                        <p className="text-xl font-semibold">Code details</p>
                        <p className="text-base font-semibold">
                            Title <span className="font-light">(optional)</span>
                        </p>
                        <InputComponent
                            label="Title"
                            placeholder=""
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="text-base w-full"
                        />
                    </div>

                    <div className="flex flex-col gap-3">
                        <p className="text-lg font-semibold">Short link</p>
                        <p className="text-sm font-light">
                            The short link directs users to the website or
                            content linked to your QR Code. If you update the
                            short link after creating the QR Code it will change
                            the code.
                        </p>
                        <div className="flex items-center gap-4 ">
                            <div className="flex flex-col items-start gap-2 w-1/2">
                                <p className="text-sm font-medium">Domain</p>
                                <InputComponent
                                    label="Title"
                                    placeholder=""
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="text-base w-full"
                                />
                            </div>
                            <p className="mt-auto mb-3">/</p>
                            <div className="flex flex-col items-start gap-2 w-1/2">
                                <p className="text-sm font-medium">
                                    Custom back-half{" "}
                                    <span className="font-normal">
                                        (optional)
                                    </span>
                                </p>

                                <InputComponent
                                    label="Title"
                                    placeholder=""
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="text-base w-full"
                                />
                            </div>
                        </div>
                    </div>
                </form>
                <Footer />
            </div>

            <div className="w-2/5 h-full bg-cover bg-center flex flex-col items-center py-10">
                <p className="text-lg font-semibold text-zinc-600 my-5">
                    Preview
                </p>

                <div className="h-52 w-52 bg-blue-400"></div>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <div
            className="flex flex-col gap-2 py-4 absolute bottom-0 w-full bg-white"
            style={{
                boxShadow: "0px -4px 10px 0px rgba(0, 0, 0, 0.1)",
            }}
        >
            <div className="flex gap-4 px-4 items-center justify-between">
                <Button
                    label="Cancel"
                    onClick={() => {}}
                    className="bg-slate-500 text-black hover:bg-zinc-300 border border-zinc-300"
                />
                <Button
                    label="Design your code"
                    onClick={() => {}}
                    className="bg-blue-700 text-white"
                />
            </div>
        </div>
    );
};

export default CreateQR;

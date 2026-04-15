"use client";

import { useState } from "react";
import { Button } from "@codax/ui/components/button";
import {
  CharsetList,
  CharsetListType,
  customId,
  customLengthList,
  generateId,
  hexLengthList,
  IdFormatList,
  IdFormatType,
  numericLengthList,
  shortLengthList,
} from "@/utils/tools/uuidGenerator";
import SectionHeader, { SectionHeaderType } from "@codax/ui/components/ui/sectionHeader";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@codax/ui/components/select";
import Copy from "@codax/ui/components/ui/copy";

export default function UuidGenerator() {
  const SectionHeaderData: SectionHeaderType = {
    title: "UUID Generator",
    description: "Generator unique identifiers in various formats instantly.",
  };

  const [result, setResult] = useState<string>("");
  const [selectedFormat, setSelectedFormat] = useState<string>("");
  const [selectedLength, setSelectedLength] = useState<string>("");
  const [selectedCharset, setSelectedCharset] = useState<string>("");

  const handleGenerate = () => {
    if (selectedFormat === "custom") {
      if (selectedLength.length > 0) {
        const charset =
          selectedCharset.length > 0 ? (selectedCharset as CharsetListType) : undefined;
        return setResult(customId(Number(selectedLength), charset));
      }
      return setResult(customId());
    }

    if (selectedFormat.length > 0) {
      if (selectedLength.length > 0) {
        return setResult(generateId(selectedFormat as IdFormatType, Number(selectedLength)));
      }
      return setResult(generateId(selectedFormat as IdFormatType));
    } else {
      return setResult(generateId());
    }
  };

  return (
    <>
      <section className="grow py-24">
        {/* Section Header */}
        <SectionHeader
          title={SectionHeaderData.title}
          description={SectionHeaderData.description}
        />
        {/* Body */}
        <div className="w-full flex items-center justify-center my-6 gap-3">
          {/* Select Id Format */}
          <Select value={selectedFormat} onValueChange={setSelectedFormat}>
            <SelectTrigger className="w-full max-w-48">
              <SelectValue placeholder="Select id format" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Id formats</SelectLabel>
                {IdFormatList.map((item, idx) => (
                  <SelectItem key={idx} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Select Length */}
          {selectedFormat.length > 0 &&
            selectedFormat !== "uuid" &&
            selectedFormat !== "timestamp" && (
              <Select value={selectedLength} onValueChange={setSelectedLength}>
                <SelectTrigger className="w-full max-w-20">
                  <SelectValue placeholder="Id length" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Id length</SelectLabel>
                    {/* Short */}
                    {selectedFormat === "short" &&
                      shortLengthList.map((item, idx) => (
                        <SelectItem key={idx} value={String(item)}>
                          {item}
                        </SelectItem>
                      ))}

                    {/* Numeric */}
                    {selectedFormat === "numeric" &&
                      numericLengthList.map((item, idx) => (
                        <SelectItem key={idx} value={String(item)}>
                          {item}
                        </SelectItem>
                      ))}

                    {/* Hex */}
                    {selectedFormat === "hex" &&
                      hexLengthList.map((item, idx) => (
                        <SelectItem key={idx} value={String(item)}>
                          {item}
                        </SelectItem>
                      ))}

                    {/* Custom */}
                    {selectedFormat === "custom" &&
                      customLengthList.map((item, idx) => (
                        <SelectItem key={idx} value={String(item)}>
                          {item}
                        </SelectItem>
                      ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}

          {/* Select Charset */}
          {selectedFormat.length > 0 && selectedFormat === "custom" && (
            <Select value={selectedCharset} onValueChange={setSelectedCharset}>
              <SelectTrigger className="w-full max-w-24">
                <SelectValue placeholder="Select charset" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Charset</SelectLabel>
                  {CharsetList.map((item, idx) => (
                    <SelectItem key={idx} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          )}

          {/* Button */}
          <Button onClick={handleGenerate} className="btn">
            Generate
          </Button>
        </div>

        {/* Result */}
        {result.length > 0 && (
          <div className="flex items-center justify-center gap-4 mt-8">
            <p className="text-2xl font-medium">{result}</p>
            <Copy text={result} />
          </div>
        )}
      </section>
    </>
  );
}

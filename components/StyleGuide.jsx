"use client";

import Link from "next/link";
import * as React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const StyleGuide = () => {
  const [date, setDate] = React.useState();
  return (
    <>
      <div className="flex flex-col p-24 gap-y-4">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At impedit
          ipsa excepturi, quos placeat rerum modi ea eos ducimus, reiciendis, et
          itaque. Vitae, voluptatibus iste earum tenetur placeat velit ut.
        </p>
        <div className="flex flex-col p-24 bg-black gap-y-4 ">
          <Link href="/">Link</Link>

          {/* buttons */}
          <Button variant="default">Button 1</Button>
          <Button variant="orange">Button 2</Button>
          <Button variant="input">Button 3</Button>
          <Button variant="orange" size="sm">
            Button 2
          </Button>

          {/* labal */}
          <div>
            <Label htmlFor="firstname">First Name</Label>
            <Input type="firstname" id="firstname" />
          </div>
          <div>
            <Label htmlFor="lastname">Last Name</Label>
            <Input type="lastname" id="lastname" />
          </div>
          <div>
            <Label>Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"input"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-white"
                  )}
                >
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
};

export default StyleGuide;

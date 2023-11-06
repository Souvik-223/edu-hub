"use client"

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from "@/components/ui/form"
import { input } from "zod";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";


interface TitleFormProps {
    initialData: {
        title: string;
    };
    courseId: string;
}

const formSchema = z.object({
    title: z.string().min(1, {
        message: "Title is required"
    }),
})

export default function TitleForm({ initialData, courseId }: TitleFormProps) {
    const [isEditing, setisEditiing] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData
    });

    const { isSubmitting, isValid } = form.formState;

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);

    }

    return (
        <div className="mt-6 bg-slate-100 rounded-md p-4">
            <div className="font-medium flex items-center justify-between">
                Course Title
                <Button variant="ghost">
                    {isEditing && (
                        <>
                            Cancle
                        </>
                    )}
                    {!isEditing && (
                        <>
                            <Pencil className="h-4 w-4 mr-2" />
                            Edit Title
                        </>
                    )}
                </Button>
            </div>
        </div>
    )
};

"use client"

import * as z from 'zod';
import axios from 'axios';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from "react-hook-form";
import { useRouter } from 'next/router';
import{
Form,
FormControl,
FormDescription,
FormField,
FormItem,
FormLabel
} from "@/components/ui/form"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


const formSchema = z.object({
    title: z.string().min(1,{
        message:"Title is Required"
    }),
});


export default function Createpage() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title:""  
        },
    })

    const {isSubmitting, isValid} = form.formState;
    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
        
    }

    return(
        <div className='max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6'>
            <div>
                <h1 className='text-2xl font-semibold'>
                    Name your Course
                </h1>
                <p className='text-sm text-slate-600'>
                  What would you like to name your course? Don&apos;t worry you can change it later.  
                </p>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 mt-8'>
                        <FormField
                            control={form.control}
                            name='title'
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>
                                        Course title
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            disabled={isSubmitting}
                                            placeholder="e.g 'Advance Web Development'"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </form>
                </Form>
            </div>
        </div>
    )
};

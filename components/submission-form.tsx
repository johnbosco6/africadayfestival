"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

interface FormField {
  name: string
  label: string
  type: "text" | "email" | "select" | "textarea" | "file"
  options?: string[]
  required?: boolean
}

interface SubmissionFormProps {
  title: string
  description: string
  fields: FormField[]
  submitButtonText: string
  onSubmit?: (formData: Record<string, string>) => void
}

export function SubmissionForm({ title, description, fields, submitButtonText, onSubmit }: SubmissionFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [termsAccepted, setTermsAccepted] = useState(false)

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!termsAccepted) {
      alert("You must accept the Terms of Service and Privacy Policy to proceed.")
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Add terms acceptance to form data
      const submissionData = {
        ...formData,
        termsAccepted: "Yes",
      }

      if (onSubmit) {
        onSubmit(submissionData)
        setSubmitStatus("success")
        setFormData({})
        setTermsAccepted(false)
      } else {
        const response = await fetch("https://formspree.io/f/mldgwprz", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submissionData),
        })

        if (response.ok) {
          setSubmitStatus("success")
          setFormData({})
          setTermsAccepted(false)
        } else {
          setSubmitStatus("error")
        }
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-serif mb-4">{title}</h1>
      <p className="mb-6">{description}</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        {fields.map((field) => (
          <div key={field.name}>
            <Label htmlFor={field.name}>{field.label}</Label>
            {field.type === "select" ? (
              <Select
                onValueChange={(value) => handleChange(field.name, value)}
                value={formData[field.name]}
                className="w-full"
              >
                <SelectTrigger>
                  <SelectValue placeholder={`Select ${field.label}`} />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200 shadow-lg">
                  {field.options?.map((option) => (
                    <SelectItem key={option} value={option} className="cursor-pointer hover:bg-gray-100">
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : field.type === "textarea" ? (
              <Textarea
                id={field.name}
                name={field.name}
                required={field.required}
                value={formData[field.name] || ""}
                onChange={(e) => handleChange(field.name, e.target.value)}
              />
            ) : field.type === "file" ? (
              <Input
                id={field.name}
                name={field.name}
                type="file"
                required={field.required}
                onChange={(e) => handleChange(field.name, e.target.value)}
              />
            ) : (
              <Input
                id={field.name}
                name={field.name}
                type={field.type}
                required={field.required}
                value={formData[field.name] || ""}
                onChange={(e) => handleChange(field.name, e.target.value)}
              />
            )}
          </div>
        ))}

        {/* GDPR Consent Checkbox */}
        <div className="flex items-start space-x-2 mt-6">
          <Checkbox
            id="terms"
            checked={termsAccepted}
            onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
            className="mt-1"
          />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I accept the Terms of Service and Privacy Policy
            </label>
            <p className="text-sm text-gray-500">
              By checking this box, you agree to our{" "}
              <Link href="/terms-of-service" className="text-orange-600 hover:underline" target="_blank">
                Terms of Service
              </Link>{" "}
              and acknowledge that you have read our{" "}
              <Link href="/privacy-policy" className="text-orange-600 hover:underline" target="_blank">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting || !termsAccepted}>
          {isSubmitting ? "Submitting..." : submitButtonText}
        </Button>
        {submitStatus === "success" && <p className="text-green-600 text-center">Thank you for your submission!</p>}
        {submitStatus === "error" && (
          <p className="text-red-600 text-center">Something went wrong. Please try again.</p>
        )}
      </form>
    </div>
  )
}

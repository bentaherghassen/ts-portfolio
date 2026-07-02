/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { GlassCard, GlowButton } from "./StyledElements";
import { useLanguage } from "../context/LanguageContext";

interface ContactFormInputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInputs>({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    }
  });

  const onSubmit = (data: ContactFormInputs) => {
    setIsSubmitting(true);

    // Simulate secure server-side transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white">
              {t.contact.title}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-start">
            {/* Left Column: Direct Coordinates (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <GlassCard className="space-y-8">
                <div className="space-y-3">
                  <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">
                    {t.contact.infoTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {t.contact.infoDesc}
                  </p>
                </div>

                <div className="space-y-5">
                  {/* Email */}
                  <div className="flex gap-4 items-center">
                    <div className="p-3 bg-blue-50 dark:bg-slate-800/60 rounded-xl text-blue-600 dark:text-blue-400 flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 dark:text-slate-500 font-mono">
                        {t.contact.emailLabel}
                      </div>
                      <a
                        href="mailto:bentaherghassen@gmail.com"
                        className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-500 transition-colors"
                      >
                        bentaherghassen@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone - as explicitly requested */}
                  <div className="flex gap-4 items-center">
                    <div className="p-3 bg-purple-50 dark:bg-slate-800/60 rounded-xl text-purple-600 dark:text-purple-400 flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 dark:text-slate-500 font-mono">
                        {t.contact.phoneLabel}
                      </div>
                      <a
                        href="tel:+21650139196"
                        className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-500 transition-colors"
                      >
                        +216 50 139 196
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex gap-4 items-center">
                    <div className="p-3 bg-emerald-50 dark:bg-slate-800/60 rounded-xl text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 dark:text-slate-500 font-mono">
                        {t.contact.locationLabel}
                      </div>
                      <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                        Sidi Bouzyd ,Tunis , Tunisia
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800/80 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  <strong>{t.contact.workingHoursLabel}</strong> {t.contact.workingHoursValue}
                </div>
              </GlassCard>
            </div>

            {/* Right Column: Contact form with state animations (7 cols) */}
            <div className="lg:col-span-7">
              <GlassCard className="relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {!isSuccess ? (
                    <motion.form
                      key="contact-form"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-5"
                    >
                      <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">
                        {t.contact.formTitle}
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                            {t.contact.nameLabel} <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Ghassen Ben Taher"
                            className={`w-full px-3.5 py-2.5 rounded-lg border bg-transparent text-sm text-slate-900 dark:text-white focus:outline-none transition-colors ${
                              errors.name 
                                ? "border-rose-500 focus:border-rose-500 dark:border-rose-500/80" 
                                : "border-slate-200 dark:border-slate-800 focus:border-blue-500"
                            }`}
                            {...register("name", { required: t.contact.nameReq })}
                          />
                          <AnimatePresence>
                            {errors.name && (
                              <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="text-xs text-rose-500 dark:text-rose-400 flex items-center gap-1 mt-1 font-medium"
                              >
                                <AlertCircle className="w-3 h-3" />
                                {errors.name.message}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                            {t.contact.emailLabelForm} <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="email"
                            placeholder="email@bentaherghassen.dev"
                            className={`w-full px-3.5 py-2.5 rounded-lg border bg-transparent text-sm text-slate-900 dark:text-white focus:outline-none transition-colors ${
                              errors.email 
                                ? "border-rose-500 focus:border-rose-500 dark:border-rose-500/80" 
                                : "border-slate-200 dark:border-slate-800 focus:border-blue-500"
                            }`}
                            {...register("email", {
                              required: t.contact.emailReq,
                              pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: t.contact.emailPattern
                              }
                            })}
                          />
                          <AnimatePresence>
                            {errors.email && (
                              <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="text-xs text-rose-500 dark:text-rose-400 flex items-center gap-1 mt-1 font-medium"
                              >
                                <AlertCircle className="w-3 h-3" />
                                {errors.email.message}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                          {t.contact.subjectLabel}
                        </label>
                        <input
                          type="text"
                          placeholder={t.contact.subjectPlaceholder}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
                          {...register("subject")}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                          {t.contact.messageLabel} <span className="text-rose-500">*</span>
                        </label>
                        <textarea
                          rows={4}
                          placeholder={t.contact.messagePlaceholder}
                          className={`w-full px-3.5 py-2.5 rounded-lg border bg-transparent text-sm text-slate-900 dark:text-white focus:outline-none transition-colors resize-none ${
                            errors.message 
                              ? "border-rose-500 focus:border-rose-500 dark:border-rose-500/80" 
                              : "border-slate-200 dark:border-slate-800 focus:border-blue-500"
                          }`}
                          {...register("message", { required: t.contact.messageReq })}
                        />
                        <AnimatePresence>
                          {errors.message && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="text-xs text-rose-500 dark:text-rose-400 flex items-center gap-1 mt-1 font-medium"
                            >
                              <AlertCircle className="w-3 h-3" />
                              {errors.message.message}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className="pt-2">
                        <GlowButton
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full sm:w-auto"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              {t.contact.submittingBtn}
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              {t.contact.submitBtn}
                            </>
                          )}
                        </GlowButton>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success-screen"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="py-12 flex flex-col items-center text-center space-y-4"
                    >
                      <div className="p-3 bg-emerald-50 dark:bg-emerald-950/30 rounded-full text-emerald-600 dark:text-emerald-400">
                        <CheckCircle className="w-10 h-10" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">
                          {t.contact.successTitle}
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                          {t.contact.successDesc}
                        </p>
                      </div>
                      <div className="pt-4">
                        <GlowButton
                          onClick={() => setIsSuccess(false)}
                          variant="secondary"
                        >
                          {t.contact.sendAnother}
                        </GlowButton>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

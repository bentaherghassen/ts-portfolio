/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import styled, { css } from "styled-components";
import { motion } from "motion/react";

// Types for Styled Components
interface ThemeProps {
  theme: {
    isDark: boolean;
  };
}

// Glassmorphic Card styled component
export const GlassCard = styled.div<ThemeProps>`
  background: ${props => props.theme.isDark ? "rgba(30, 41, 59, 0.45)" : "rgba(255, 255, 255, 0.65)"};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid ${props => props.theme.isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(15, 23, 42, 0.08)"};
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, ${props => props.theme.isDark ? "0.2" : "0.03"});
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 40px rgba(59, 130, 246, ${props => props.theme.isDark ? "0.15" : "0.06"});
    border-color: ${props => props.theme.isDark ? "rgba(96, 165, 250, 0.3)" : "rgba(59, 130, 246, 0.25)"};
  }
`;

// Glowing interactive text
export const GradientHeading = styled.h2`
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: -0.025em;
  background: linear-gradient(135deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

// Elegant glow button
export const GlowButton = styled.button<ThemeProps & { variant?: "primary" | "secondary" }>`
  font-family: var(--font-sans);
  font-weight: 500;
  font-size: 0.875rem;
  padding: 0.625rem 1.25rem;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  ${props => props.variant === "secondary" 
    ? css`
        background: transparent;
        color: ${props.theme.isDark ? "#f8fafc" : "#0f172a"};
        border: 1px solid ${props.theme.isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.15)"};
        &:hover {
          background: ${props.theme.isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)"};
          border-color: ${props.theme.isDark ? "#3b82f6" : "#2563eb"};
        }
      `
    : css`
        background: linear-gradient(135deg, #3b82f6, #2563eb);
        color: #ffffff;
        border: none;
        box-shadow: 0 4px 14px rgba(59, 130, 246, 0.3);
        &:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.45);
          filter: brightness(1.05);
        }
        &:active {
          transform: translateY(0);
        }
      `
  }
`;

// Dynamic custom progress bar container for skills
export const SkillProgressBarContainer = styled.div<ThemeProps>`
  width: 100%;
  height: 6px;
  background: ${props => props.theme.isDark ? "#334155" : "#e2e8f0"};
  border-radius: 9999px;
  position: relative;
  overflow: hidden;
`;

export const SkillProgressFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #3b82f6, #a855f7);
  border-radius: 9999px;
`;

// Slideshow Frame Custom Styled Wrapper
export const SlideshowFrame = styled.div<ThemeProps>`
  position: relative;
  overflow: hidden;
  border-radius: 1.5rem;
  background: ${props => props.theme.isDark ? "#1e293b" : "#ffffff"};
  border: 1px solid ${props => props.theme.isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0,0,0,0.05)"};
  box-shadow: 0 20px 50px rgba(0, 0, 0, ${props => props.theme.isDark ? "0.3" : "0.05"});
`;

// Badge Accent Component
export const TechBadge = styled.span<ThemeProps>`
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 500;
  padding: 0.25rem 0.625rem;
  border-radius: 9999px;
  background: ${props => props.theme.isDark ? "rgba(59, 130, 246, 0.15)" : "rgba(59, 130, 246, 0.08)"};
  color: ${props => props.theme.isDark ? "#93c5fd" : "#1d4ed8"};
  border: 1px solid ${props => props.theme.isDark ? "rgba(59, 130, 246, 0.2)" : "rgba(59, 130, 246, 0.12)"};
`;

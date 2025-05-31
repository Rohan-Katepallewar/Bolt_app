import { BarData, Partner, Quote } from '../types';

export const impactData: BarData[] = [
  { label: 'Standard Model', value: 0.1, color: '#4A90E2' },
  { label: 'ConnectEd Approach', value: 0.3, color: '#5CB85C' },
  { label: 'Intensive Tutoring', value: 0.2, color: '#F0AD4E' },
  { label: 'Traditional Classroom', value: 0.05, color: '#D9534F' },
];

export const quotes: Quote[] = [
  {
    id: 1,
    text: "The tutoring calls helped my daughter gain confidence in math. Now she's excited to solve problems!",
    author: "Priya Singh",
    role: "Parent, Delhi"
  },
  {
    id: 2,
    text: "As a teacher, I've seen remarkable progress in students who participate in the program. Their foundational skills have improved dramatically.",
    author: "Michael Chen",
    role: "Mathematics Teacher"
  },
  {
    id: 3,
    text: "The combination of technology and personalized support makes this program uniquely effective. We've measured significant improvements across districts.",
    author: "Dr. Sarah Johnson",
    role: "Education Policy Advisor"
  },
  {
    id: 4,
    text: "Ganitha Ganaka has transformed how we approach numeracy in our schools. The results speak for themselves.",
    author: "Rajiv Mehta",
    role: "District Education Officer"
  }
];

export const partners: Partner[] = [
  {
    id: 1,
    name: "Youth Impact",
    logo: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    name: "Agency Fund",
    logo: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    name: "J-PAL",
    logo: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    name: "What Works Hub",
    logo: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];
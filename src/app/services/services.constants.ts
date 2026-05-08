import type { IconType } from 'react-icons';
import {
  LuLayoutTemplate,
  LuSmartphone,
  LuGlobe,
  LuWrench,
  LuCode,
  LuBrain,
} from 'react-icons/lu';

export interface PanelTheme {
  number: string;
  bg: string;
  topBar: string;
  glow: string;
  iconBox: string;
  tag: string;
  dot: string;
  ghostNum: string;
  label: string;
}

export const serviceIcons: IconType[] = [
  LuCode,
  LuLayoutTemplate,
  LuSmartphone,
  LuGlobe,
  LuBrain,
  LuWrench,
];

export const panelThemes: PanelTheme[] = [
  {
    number: '01',
    bg: 'from-slate-950 via-blue-950/40 to-slate-950',
    topBar: 'from-blue-400 to-blue-500',
    glow: 'bg-blue-500/10',
    iconBox: 'bg-blue-500/10 border-blue-400/20 text-blue-400',
    tag: 'bg-blue-500/10 border-blue-400/25 text-blue-300',
    dot: 'bg-blue-400',
    ghostNum: 'text-blue-400/[0.05]',
    label: 'text-blue-400/60',
  },
  {
    number: '02',
    bg: 'from-slate-950 via-indigo-950/40 to-slate-950',
    topBar: 'from-indigo-400 to-violet-500',
    glow: 'bg-indigo-500/10',
    iconBox: 'bg-indigo-500/10 border-indigo-400/20 text-indigo-400',
    tag: 'bg-indigo-500/10 border-indigo-400/25 text-indigo-300',
    dot: 'bg-indigo-400',
    ghostNum: 'text-indigo-400/[0.05]',
    label: 'text-indigo-400/60',
  },
  {
    number: '03',
    bg: 'from-slate-950 via-violet-950/40 to-slate-950',
    topBar: 'from-violet-400 to-purple-500',
    glow: 'bg-violet-500/10',
    iconBox: 'bg-violet-500/10 border-violet-400/20 text-violet-400',
    tag: 'bg-violet-500/10 border-violet-400/25 text-violet-300',
    dot: 'bg-violet-400',
    ghostNum: 'text-violet-400/[0.05]',
    label: 'text-violet-400/60',
  },
  {
    number: '04',
    bg: 'from-slate-950 via-purple-950/40 to-slate-950',
    topBar: 'from-purple-400 to-purple-600',
    glow: 'bg-purple-500/10',
    iconBox: 'bg-purple-500/10 border-purple-400/20 text-purple-400',
    tag: 'bg-purple-500/10 border-purple-400/25 text-purple-300',
    dot: 'bg-purple-400',
    ghostNum: 'text-purple-400/[0.05]',
    label: 'text-purple-400/60',
  },
  {
    number: '05',
    bg: 'from-slate-950 via-purple-950/40 to-slate-950',
    topBar: 'from-purple-500 to-purple-600',
    glow: 'bg-purple-600/10',
    iconBox: 'bg-purple-500/10 border-purple-500/20 text-purple-500',
    tag: 'bg-purple-500/10 border-purple-500/25 text-purple-400',
    dot: 'bg-purple-500',
    ghostNum: 'text-purple-500/[0.05]',
    label: 'text-purple-500/60',
  },
  {
    number: '06',
    bg: 'from-slate-950 via-purple-950/50 to-slate-950',
    topBar: 'from-purple-600 to-purple-700',
    glow: 'bg-purple-700/10',
    iconBox: 'bg-purple-600/10 border-purple-600/20 text-purple-400',
    tag: 'bg-purple-600/10 border-purple-600/25 text-purple-300',
    dot: 'bg-purple-600',
    ghostNum: 'text-purple-600/[0.05]',
    label: 'text-purple-600/60',
  },
];

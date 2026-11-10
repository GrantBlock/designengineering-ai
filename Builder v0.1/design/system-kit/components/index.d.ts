import type * as React from 'react';
export type IconName = 'home'|'clock'|'folder'|'project'|'cube'|'bolt'|'chip'|'wave'|'clipboard'|'doc'|'tag'|'check'|'book'|'sparkle'|'plus'|'send'|'arrow-up-right'|'chevron-right'|'chevron-down'|'chevron-updown'|'account'|'star'|'search'|'help'|'more';
export interface IconProps { name: IconName; size?: number; strokeWidth?: number; filled?: boolean; className?: string; style?: React.CSSProperties }
export declare function Icon(props: IconProps): React.ReactElement;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { variant?: 'ghost' | 'chip' | 'row'; icon?: IconName; tag?: string; trailing?: boolean }
export declare function Button(props: ButtonProps): React.ReactElement;
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { icon: IconName; variant?: 'ghost' | 'star' | 'outline' | 'send'; size?: 'xs' | 'sm' | 'md' | 'lg'; armed?: boolean; on?: boolean; 'aria-label': string }
export declare function IconButton(props: IconButtonProps): React.ReactElement;
export interface TagProps { plain?: boolean; children?: React.ReactNode }
export declare function Tag(props: TagProps): React.ReactElement;
export interface AvatarProps { initial: string; size?: 'md' | 'lg' }
export declare function Avatar(props: AvatarProps): React.ReactElement;
export interface HeroProps { title: React.ReactNode; eyebrow?: React.ReactNode; actions?: React.ReactNode; mobile?: boolean }
export declare function Hero(props: HeroProps): React.ReactElement;
export interface PanelProps { children?: React.ReactNode; style?: React.CSSProperties }
export declare function Panel(props: PanelProps): React.ReactElement;
export interface SectionHeaderProps { title: React.ReactNode; count?: React.ReactNode; onMore?: () => void; action?: string; href?: string; onAction?: (e: React.MouseEvent) => void; mobile?: boolean }
export declare function SectionHeader(props: SectionHeaderProps): React.ReactElement;
export interface PromptCardProps { category: string; label: string; starred?: boolean; onClick?: (e: React.SyntheticEvent) => void; onStar?: (e: React.MouseEvent) => void }
export declare function PromptCard(props: PromptCardProps): React.ReactElement;
export interface EmptyNoteProps { children?: React.ReactNode }
export declare function EmptyNote(props: EmptyNoteProps): React.ReactElement;
export interface MessageProps { from?: 'user' | 'assistant'; author?: string; children?: React.ReactNode }
export declare function Message(props: MessageProps): React.ReactElement;
export interface SearchFieldProps { placeholder?: string; value?: string; onChange?: React.ChangeEventHandler<HTMLInputElement>; shortcut?: string | false }
export declare function SearchField(props: SearchFieldProps): React.ReactElement;
export interface ComposerProps { placeholder?: string; value?: string; defaultValue?: string; onChange?: (text: string) => void; onSend?: (text: string) => void; onAttach?: () => void; picker?: string | false; meta?: string }
export declare function Composer(props: ComposerProps): React.ReactElement;
export interface MobileComposerProps { placeholder?: string; value?: string; defaultValue?: string; onChange?: (text: string) => void; onSend?: (text: string) => void }
export declare function MobileComposer(props: MobileComposerProps): React.ReactElement;
export interface NavItemProps { icon: IconName; label: string; tag?: string; children?: string[]; open?: boolean; defaultOpen?: boolean; active?: boolean; activeChild?: string | null; onSelect?: () => void; onToggle?: (open: boolean) => void; onSelectChild?: (child: string) => void }
export declare function NavItem(props: NavItemProps): React.ReactElement;
export interface NavGroup { label?: string; items: { id: string; label: string; icon: IconName; tag?: string; children?: string[]; open?: boolean }[] }
export interface SidebarProps { groups: NavGroup[]; title?: string; logoSrc?: string; defaultActive?: { id: string; child?: string | null }; onNavigate?: (id: string, child?: string) => void; footer?: string }
export declare function Sidebar(props: SidebarProps): React.ReactElement;
export interface TopBarProps { crumb: React.ReactNode; actions?: React.ReactNode; initial?: string; onNew?: () => void }
export declare function TopBar(props: TopBarProps): React.ReactElement;
export interface AppShellProps { sidebar: React.ReactNode; topbar: React.ReactNode; children?: React.ReactNode; style?: React.CSSProperties }
export declare function AppShell(props: AppShellProps): React.ReactElement;
export interface MobileHeaderProps { title?: string; logoSrc?: string; initial?: string }
export declare function MobileHeader(props: MobileHeaderProps): React.ReactElement;
export interface ActionCardProps { tone?: 'primary' | 'secondary' | 'starter'; icon?: IconName; category?: string; title: React.ReactNode; onClick?: () => void }
export declare function ActionCard(props: ActionCardProps): React.ReactElement;
export interface StageProgressProps { step: number; total?: number }
export declare function StageProgress(props: StageProgressProps): React.ReactElement;
export interface ProjectRowProps { number: string; name: string; step: number; stage: string; onClick?: () => void }
export declare function ProjectRow(props: ProjectRowProps): React.ReactElement;
export interface TabBarProps { tabs: { id: string; label: string; icon: IconName }[]; value?: string; defaultTab?: string; onChange?: (id: string) => void }
export declare function TabBar(props: TabBarProps): React.ReactElement;
declare global { interface Window { DE: { Icon: typeof Icon; Button: typeof Button; IconButton: typeof IconButton; Tag: typeof Tag; Avatar: typeof Avatar; Hero: typeof Hero; Panel: typeof Panel; SectionHeader: typeof SectionHeader; PromptCard: typeof PromptCard; EmptyNote: typeof EmptyNote; Message: typeof Message; SearchField: typeof SearchField; Composer: typeof Composer; MobileComposer: typeof MobileComposer; NavItem: typeof NavItem; Sidebar: typeof Sidebar; TopBar: typeof TopBar; AppShell: typeof AppShell; MobileHeader: typeof MobileHeader; ActionCard: typeof ActionCard; StageProgress: typeof StageProgress; ProjectRow: typeof ProjectRow; TabBar: typeof TabBar; ICON_PATHS: Record<string, string> } } }

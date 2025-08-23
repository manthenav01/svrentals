"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, Phone } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Logo } from "@/components/logo"

export function Header() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-lg border-b border-white/20 shadow-lg shadow-emerald-100/20">
			<div className="container mx-auto flex h-16 items-center justify-between px-4">
				{/* Left: Brand */}
				<Link href="/" className="group">
					<motion.div 
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="flex items-center gap-3"
					>
						<Logo size={36} className="group-hover:opacity-90 transition-opacity" />
						<span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">SV Rentals</span>
					</motion.div>
				</Link>

				{/* Mobile menu button */}
				<Button
					variant="ghost"
					size="icon"
					className="md:hidden"
					onClick={() => setIsOpen((v) => !v)}
					aria-label="Toggle menu"
				>
					<Menu className="h-6 w-6" />
				</Button>

				{/* Center: Nav */}
				<nav className="hidden md:flex items-center gap-8 text-[15px] font-medium">
					<motion.div whileHover={{ y: -1 }}>
						<Link href="/" className="text-gray-600 hover:text-emerald-600 transition-all duration-200 relative group">
							Home
							<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-200"></span>
						</Link>
					</motion.div>
					<motion.div whileHover={{ y: -1 }}>
						<Link href="/pricing" className="text-gray-600 hover:text-emerald-600 transition-all duration-200 relative group">
							Pricing
							<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-200"></span>
						</Link>
					</motion.div>
					<motion.div whileHover={{ y: -1 }}>
						<Link href="/about" className="text-gray-600 hover:text-emerald-600 transition-all duration-200 relative group">
							About Us
							<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-200"></span>
						</Link>
					</motion.div>
					<motion.div whileHover={{ y: -1 }}>
						<Link href="/contact" className="text-gray-600 hover:text-emerald-600 transition-all duration-200 relative group">
							Contact
							<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-200"></span>
						</Link>
					</motion.div>
				</nav>

				{/* Right: Book Now */}
				<div className="hidden md:flex items-center">
					<motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
						<Button 
							asChild
							className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-medium px-6 py-2 rounded-xl shadow-lg hover:shadow-emerald-200 transition-all duration-200 border-0"
							style={{ 
								background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
								color: 'white'
							}}
						>
							<Link href="tel:+917996790039" className="flex items-center gap-2">
								<Phone className="h-4 w-4" />
								<span>Call Now</span>
							</Link>
						</Button>
					</motion.div>
				</div>
			</div>

			{/* Mobile dropdown */}
			{isOpen && (
				<motion.div 
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.2 }}
					className="md:hidden border-t border-white/20 bg-white/98 backdrop-blur-lg shadow-lg"
				>
					<nav className="container mx-auto grid grid-cols-2 gap-4 p-4 text-gray-600">
						<Link href="/" className="hover:text-emerald-600 transition-colors font-medium py-2">
							Home
						</Link>
						<Link href="/pricing" className="hover:text-emerald-600 transition-colors font-medium py-2">
							Pricing
						</Link>
						<Link href="/about" className="hover:text-emerald-600 transition-colors font-medium py-2">
							About Us
						</Link>
						<Link href="/contact" className="hover:text-emerald-600 transition-colors font-medium py-2">
							Contact
						</Link>
						<Button 
							asChild
							className="col-span-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-medium border-0"
							style={{ 
								background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
								color: 'white'
							}}
						>
							<Link href="tel:+917996790039" className="flex items-center justify-center gap-2">
								<Phone className="h-4 w-4" />
								Call Now
							</Link>
						</Button>
					</nav>
				</motion.div>
			)}
		</header>
	)
}
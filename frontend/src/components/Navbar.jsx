import { Link } from "react-router";
import { SignInButton, SignUpButton, UserButton, useAuth } from "@clerk/clerk-react";
import { ShoppingBagIcon, PlusIcon, UserIcon, Sparkles } from "lucide-react";
import ThemeSelector from "./ThemeSelector";

function Navbar() {
  const { isSignedIn } = useAuth();

  return (
    <div className="navbar bg-linear-to-r from-base-100 to-base-200 shadow-lg border-b border-base-300 sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto w-full px-4 flex justify-between items-center">
        {/* LOGO - LEFT SIDE */}
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost gap-2 hover:bg-primary/10 transition-all duration-300 group">
            <div className="relative">
              <ShoppingBagIcon className="size-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              <Sparkles className="size-3 text-accent absolute -top-1 -right-1 animate-pulse-soft" />
            </div>
            <span className="text-xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">Mercato</span>
          </Link>
        </div>

        <div className="flex gap-3 items-center">
          <ThemeSelector />
          {isSignedIn ? (
            <>
              <Link to="/create" className="btn btn-primary btn-sm gap-1 btn-hover-lift shadow-md hover:shadow-lg">
                <PlusIcon className="size-4" />
                <span className="hidden sm:inline">New Product</span>
              </Link>
              <Link to="/profile" className="btn btn-outline btn-sm gap-1 hover:bg-primary/10 transition-all duration-300">
                <UserIcon className="size-4" />
                <span className="hidden sm:inline">Profile</span>
              </Link>
              <div className="divider divider-horizontal mx-1 h-6"></div>
              <UserButton />
            </>
          ) : (
            <>
              <SignInButton mode="modal">
                <button className="btn btn-ghost btn-sm hover:bg-primary/10 transition-all duration-300">Sign In</button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="btn btn-primary btn-sm btn-hover-lift shadow-md">Get Started</button>
              </SignUpButton>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default Navbar;
import { Button } from "../ui/button";

type HeaderProps = {
  username: string;
  handleLogout: () => void;
};

const Header = ({ username, handleLogout }: HeaderProps) => {
  return (
    <div className="border-b border-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex-1 min-w-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-1 font-bold bg-linear-to-r from-cyan-400 via-primary to-accent bg-clip-text text-transparent wrap-break-word">
            Lets have fun by learning <span className="text-black">🐍</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground mt-2">
            Master Python the interactive way
          </p>
        </div>

        <div className="flex flex-col items-start sm:items-end gap-3 w-full sm:w-auto">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-linear-to-br from-cyan-400 to-accent flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-sm sm:text-lg">
                {username.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="min-w-0">
              <p className="text-xs sm:text-sm text-muted-foreground">
                Welcome back
              </p>
              <p className="text-sm sm:text-lg font-semibold text-foreground truncate">
                @{username}
              </p>
            </div>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="w-full sm:w-auto gap-2 hover:bg-destructive/10 hover:text-destructive hover:border-destructive text-sm"
          >
            ← Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;

import { useNavigate } from "@tanstack/react-router";
import PropSvg from "./_componets/prop-svg";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const ProposalPage = () => {
  const navigate = useNavigate();
  const [storedName, setStoredName] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    let savedName = localStorage.getItem("name");
    if (!savedName) {
      setIsDialogOpen(true);
    } else {
      setStoredName(savedName);
    }
  }, []);

  const handleSubmit = () => {
    if (name && email) {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      setStoredName(name);
      setIsDialogOpen(false);
    }
  };

  return (
    <>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Welcome</DialogTitle>
            <DialogDescription>
              Please enter your name and email to continue
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogContent>
      </Dialog>

      <div className="flex w-full min-h-screen bg-gradient-to-r from-[#FEFEFE] via-[#FDFCF1] via-[#FCF9DF] to-[#FCF6D1] flex-col items-center">
        <div className="w-full flex justify-center mt-8">
          <img src="/logo.png" alt="" className="w-[200px] h-auto" />
        </div>
        <div className="flex w-full flex-1 flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img
              src="/prop.png"
              alt=""
              className="w-[80%] h-[80%] object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 max-w-xl p-6 md:p-12 flex flex-col justify-center space-y-8">
            <h1 className="text-2xl md:text-4xl font-serif font-semibold text-gray-800">
              {storedName}, let our expert planners craft your special day
            </h1>
            <div className="flex flex-col space-y-6">
              <div className="p-4 md:p-6 bg-white rounded-2xl shadow-lg">
                <div className="flex items-center gap-4 mb-2">
                  <PropSvg />
                  <h3 className="text-xl md:text-2xl font-semibold">
                    Unlock best venues, decors & more
                  </h3>
                </div>
                <p className="text-lg md:text-xl text-gray-600">
                  Tell us about your dream day & get a perfect proposal in your
                  budget for FREE
                </p>
              </div>
              <div className="p-4 md:p-6 bg-white backdrop-blur-xl rounded-2xl shadow-lg">
                <div className="flex items-center gap-4 mb-2">
                  <PropSvg />
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">
                    800+ Flawless Celebrations
                  </h3>
                </div>
                <p className="text-lg md:text-xl text-zinc-500">
                  Enjoy a perfect, stress-free wedding from the first visit to
                  the final goodbyes
                </p>
              </div>
            </div>
            <button
              onClick={() => navigate({ to: "/guest" })}
              className="w-full py-3 md:py-4 bg-pink-500 text-lg md:text-xl font-semibold rounded-full text-[#FDFCF1] hover:bg-pink-600 transition-colors shadow-[0_0_20px_rgba(255,255,0,0.3)]"
            >
              Get My FREE Proposal
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProposalPage;

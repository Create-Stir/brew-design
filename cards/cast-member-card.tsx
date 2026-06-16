/**
 * CLAUDE DESIGN SAMPLE — CastMemberCard
 * Production: src/app/.../cast/CastMemberCard.tsx
 * Used in: movie page cast grid, cast pages
 */
import React from "react";

export function CastMemberCardSample() {
  const member = {
    id: 1,
    full_name: "Greta Lee", // display name
    avatar_url: "https://createstir.b-cdn.net/project-assets/common/default_user.png",
    job: "Actor", // or ["Director", "Writer"]
    characters: ["Nora"], // role names for actors
  };

  const movieTitle = "Past Lives"; // optional — used in alt text

  return (
    <div className="flex flex-col group relative w-[120px] md:w-[140px] cursor-pointer">
      {/* 3:4 headshot */}
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 mb-4 bg-white/5 shadow-2xl">
        <img
          src={member.avatar_url}
          alt={`${member.full_name} in ${movieTitle}`}
          className="object-cover h-full w-full object-top group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
      </div>

      {/* Role label — yellow uppercase tracking */}
      <div className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-stir-yellow/80 mb-1 line-clamp-1">
        {member.job}
      </div>

      {/* Name */}
      <div className="text-base md:text-lg font-swisse-med leading-tight text-white line-clamp-1">
        {member.full_name}
      </div>

      {/* Character name (actors only) */}
      {member.characters && (
        <div className="text-xs text-white/50 mt-0.5 line-clamp-1">
          as {member.characters[0]}
        </div>
      )}
    </div>
  );
}

export default CastMemberCardSample;

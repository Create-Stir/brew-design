/**
 * CLAUDE DESIGN — Master catalog of all UI samples
 *
 * Import any sample component to preview or feed to Claude Design.
 * Each file is self-contained with inline dummy data + field comments.
 */

// ─── CARDS ────────────────────────────────────────────────────
export { MovieCardLandscapeSample } from "./cards/movie-card-landscape";
export { MovieCardPortraitSample, MovieCardPortraitWithProgressSample } from "./cards/movie-card-portrait";
export { MovieCardVHSSample } from "./cards/movie-card-vhs";
export { MovieLibraryCardSample } from "./cards/movie-library-card";
export { CastMemberCardSample } from "./cards/cast-member-card";
export { DirectorCardSample, DirectorGridSample } from "./cards/director-card";
export { EndingScreenCardSample } from "./cards/ending-screen-card";

// ─── GRIDS ────────────────────────────────────────────────────
export { MovieGridScrollSample } from "./grids/movie-grid-scroll";
export { MovieGridGridSample, MovieGridRankedSample } from "./grids/movie-grid-grid";
export { RelatedMoviesGridSample } from "./grids/related-movies-grid";

// ─── SHOWCASES ─────────────────────────────────────────────────
export { MovieShowcase2Sample } from "./showcases/movie-showcase-2";

// ─── BADGES ────────────────────────────────────────────────────
export { StatusBadgeSample, StatusBadgeCastSample } from "./badges/status-badge";
export { QualityBadgeSample } from "./badges/quality-badge";
export { ReleaseCountdownSample } from "./badges/release-countdown";

// ─── BUTTONS ───────────────────────────────────────────────────
export { ButtonVariantsSample } from "./buttons/button-variants";
export { WatchNowButtonSample, PurchaseButtonSample } from "./buttons/watch-now-button";
export { ActionButtonsSample } from "./buttons/action-buttons";

// ─── TYPOGRAPHY ────────────────────────────────────────────────
export { SectionTitlesSample } from "./typography/section-titles";
export { MovieInfoLinesSample } from "./typography/movie-info-lines";
export { StarRatingSample, StarRatingHeroSample } from "./typography/star-rating";

// ─── DIALOGS ───────────────────────────────────────────────────
export { DialogBaseSample, DialogDrawerSample } from "./dialogs/dialog-base";
export { BuyRentDialogSample } from "./dialogs/buy-rent-dialog";
export { LoginDialogSample } from "./dialogs/login-dialog";
export { PosterDialogSample } from "./dialogs/poster-dialog";
export { SynopsisDialogSample } from "./dialogs/synopsis-dialog";
export { RandomMovieDialogSample } from "./dialogs/random-movie-dialog";
export { ShareDrawerSample } from "./dialogs/share-drawer";
export { CouponDialogSample } from "./dialogs/coupon-dialog";

// ─── NAVIGATION ────────────────────────────────────────────────
export { HeaderSample } from "./navigation/header";
export { BottomNavbarSample } from "./navigation/bottom-navbar";
export { FooterSample } from "./navigation/footer";
export { MovieTabsSample } from "./navigation/movie-tabs";

// ─── HERO ──────────────────────────────────────────────────────
export { HeroSectionSample } from "./hero/hero-section";
export { MovieInfoSectionSample } from "./hero/movie-info-section";
export { PurchaseOptionsSample } from "./hero/purchase-options";

// ─── FORMS ─────────────────────────────────────────────────────
export { InputFieldSample, OtpInputSample, CommentFormSample } from "./forms/input-field";

// ─── SUBSCRIPTION ──────────────────────────────────────────────
export { PricingCardSample } from "./subscription/pricing-card";

// ─── EDITORIAL ─────────────────────────────────────────────────
export { BlogSidebarCardSample, BlogHeroCardSample } from "./editorial/blog-sidebar-card";

// ─── PLAYER ────────────────────────────────────────────────────
export { VideoControlsSample, ProgressBarSample } from "./player/video-controls";

// ─── SKELETONS ─────────────────────────────────────────────────
export { SkeletonSamples } from "./skeletons/loading-states";

// ─── MISC ──────────────────────────────────────────────────────
export { FaqAccordionSample } from "./misc/faq-accordion";
export { CookieConsentBannerSample } from "./misc/cookie-consent";
export { ErrorPageSample } from "./misc/error-page";
export { RegionRestrictedMessageSample } from "./misc/region-restricted";
export { RandomMoviePickerSample } from "./misc/random-movie-picker";
export { TestimonialCardSample } from "./misc/testimonial-card";
export { CastAndCrewSample } from "./misc/cast-and-crew";
export { AwardsFestivalsSample } from "./misc/awards-festivals";
export { BonusClipsSample } from "./misc/bonus-clips";

// ─── BRAND LOGOS ───────────────────────────────────────────────
export {
  HeaderLogosSample,
  FooterLogosSample,
  LoginHeroLogosSample,
  BrewPlusLogosSample,
  SubtextLogoSample,
  AppStoreBadgesSample,
  ProductIconsSample,
  BrandLogosCatalogSample,
} from "./logos/brand-logos";

// ─── SHARED DATA & TOKENS ──────────────────────────────────────
export * from "./sample-data";
export * from "./design-tokens";
export * from "./brand-assets";

/** Full list of sample component names for Claude reference */
export const SAMPLE_CATALOG = [
  // Cards
  "MovieCardLandscapeSample",
  "MovieCardPortraitSample",
  "MovieCardPortraitWithProgressSample",
  "MovieCardVHSSample",
  "MovieLibraryCardSample",
  "CastMemberCardSample",
  "DirectorCardSample",
  "DirectorGridSample",
  "EndingScreenCardSample",
  // Grids
  "MovieGridScrollSample",
  "MovieGridGridSample",
  "MovieGridRankedSample",
  "RelatedMoviesGridSample",
  // Showcases
  "MovieShowcase2Sample",
  // Badges
  "StatusBadgeSample",
  "StatusBadgeCastSample",
  "QualityBadgeSample",
  "ReleaseCountdownSample",
  // Buttons
  "ButtonVariantsSample",
  "WatchNowButtonSample",
  "PurchaseButtonSample",
  "ActionButtonsSample",
  // Typography
  "SectionTitlesSample",
  "MovieInfoLinesSample",
  "StarRatingSample",
  "StarRatingHeroSample",
  // Dialogs
  "DialogBaseSample",
  "DialogDrawerSample",
  "BuyRentDialogSample",
  "LoginDialogSample",
  "PosterDialogSample",
  "SynopsisDialogSample",
  "RandomMovieDialogSample",
  "ShareDrawerSample",
  "CouponDialogSample",
  // Navigation
  "HeaderSample",
  "BottomNavbarSample",
  "FooterSample",
  "MovieTabsSample",
  // Hero
  "HeroSectionSample",
  "MovieInfoSectionSample",
  "PurchaseOptionsSample",
  // Forms
  "InputFieldSample",
  "OtpInputSample",
  "CommentFormSample",
  // Subscription
  "PricingCardSample",
  // Editorial
  "BlogSidebarCardSample",
  "BlogHeroCardSample",
  // Player
  "VideoControlsSample",
  "ProgressBarSample",
  // Skeletons
  "SkeletonSamples",
  // Brand logos
  "HeaderLogosSample",
  "FooterLogosSample",
  "LoginHeroLogosSample",
  "BrewPlusLogosSample",
  "SubtextLogoSample",
  "AppStoreBadgesSample",
  "ProductIconsSample",
  "BrandLogosCatalogSample",
  // Misc
  "FaqAccordionSample",
  "CookieConsentBannerSample",
  "ErrorPageSample",
  "RegionRestrictedMessageSample",
  "RandomMoviePickerSample",
  "TestimonialCardSample",
  "CastAndCrewSample",
  "AwardsFestivalsSample",
  "BonusClipsSample",
] as const;

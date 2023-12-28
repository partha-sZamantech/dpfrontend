-- CreateTable
CREATE TABLE `authors` (
    `author_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `author_type` INTEGER NOT NULL DEFAULT 1,
    `author_name` VARCHAR(255) NOT NULL,
    `author_name_bn` VARCHAR(255) NOT NULL,
    `author_slug` VARCHAR(255) NOT NULL,
    `author_initial` VARCHAR(30) NOT NULL,
    `author_initial_bn` VARCHAR(255) NOT NULL,
    `author_bio` TEXT NULL,
    `author_bio_bn` TEXT NULL,
    `img_path` VARCHAR(255) NULL,
    `deletable` INTEGER UNSIGNED NOT NULL DEFAULT 1,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    UNIQUE INDEX `authors_author_name_slug_unique`(`author_slug`),
    UNIQUE INDEX `authors_author_initial_unique`(`author_initial`),
    PRIMARY KEY (`author_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bn_ads` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `type` INTEGER UNSIGNED NULL DEFAULT 1,
    `page` INTEGER UNSIGNED NULL,
    `position` INTEGER UNSIGNED NULL DEFAULT 1,
    `dfp_header_code` TEXT NULL,
    `code` TEXT NULL,
    `desktop_image_path` VARCHAR(255) NULL,
    `mobile_image_path` VARCHAR(255) NULL,
    `external_link` VARCHAR(255) NULL,
    `start_time` DATETIME(0) NULL,
    `end_time` DATETIME(0) NULL,
    `status` INTEGER NULL DEFAULT 1,
    `deletable` INTEGER NULL DEFAULT 1,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bn_breaking_news` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `news_title` VARCHAR(255) NULL,
    `news_link` VARCHAR(255) NULL,
    `position` INTEGER NULL,
    `hours` INTEGER NULL,
    `user_id` INTEGER NOT NULL,
    `expired_time` DATETIME(0) NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bn_categories` (
    `cat_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `cat_type` INTEGER NOT NULL DEFAULT 1,
    `cat_name` VARCHAR(100) NOT NULL,
    `cat_name_bn` VARCHAR(100) NOT NULL,
    `cat_slug` VARCHAR(100) NOT NULL,
    `cat_title` TEXT NULL,
    `cat_meta_keyword` VARCHAR(255) NULL,
    `cat_meta_description` TEXT NULL,
    `cat_position` INTEGER NOT NULL DEFAULT 0,
    `top_menu` INTEGER NOT NULL DEFAULT 2,
    `footer_menu` INTEGER NOT NULL DEFAULT 2,
    `status` INTEGER NOT NULL DEFAULT 1,
    `deletable` INTEGER NOT NULL DEFAULT 1,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`cat_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bn_content_positions` (
    `position_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `position_name` VARCHAR(255) NOT NULL,
    `position_slug` VARCHAR(255) NOT NULL,
    `cat_id` INTEGER NULL,
    `special_cat_id` INTEGER UNSIGNED NULL,
    `subcat_id` INTEGER UNSIGNED NULL,
    `content_ids` TEXT NULL,
    `total_content` INTEGER UNSIGNED NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `deletable` INTEGER NOT NULL DEFAULT 1,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`position_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bn_contents` (
    `content_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `content_type` INTEGER NOT NULL DEFAULT 1,
    `cat_id` INTEGER NOT NULL,
    `subcat_id` INTEGER NOT NULL DEFAULT 1,
    `special_cat_id` INTEGER NOT NULL DEFAULT 1,
    `country_id` INTEGER NOT NULL,
    `division_id` INTEGER NOT NULL DEFAULT 1,
    `district_id` INTEGER NOT NULL DEFAULT 1,
    `upozilla_id` INTEGER NOT NULL,
    `content_heading` TEXT NOT NULL,
    `content_sub_heading` TEXT NULL,
    `author_slugs` VARCHAR(255) NULL,
    `author_name` VARCHAR(255) NULL,
    `content_brief` TEXT NULL,
    `content_details` LONGTEXT NOT NULL,
    `img_xs_path` VARCHAR(255) NULL,
    `img_sm_path` VARCHAR(255) NULL,
    `img_sm_caption` TEXT NULL,
    `img_bg_path` VARCHAR(255) NULL,
    `img_bg_caption` TEXT NULL,
    `related_ids` TEXT NULL,
    `photo_ids` VARCHAR(255) NULL,
    `video_type` INTEGER NULL,
    `video_id` TEXT NULL,
    `uploader_id` INTEGER UNSIGNED NOT NULL,
    `reporter_id` INTEGER NULL,
    `tags` TEXT NULL,
    `meta_keywords` TEXT NULL,
    `timeline_tag` TEXT NULL,
    `podcast_id` VARCHAR(255) NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `scroll` INTEGER NOT NULL DEFAULT 1,
    `total_hit` INTEGER NOT NULL DEFAULT 0,
    `deletable` INTEGER NOT NULL DEFAULT 1,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    INDEX `deletable`(`deletable`),
    INDEX `status`(`status`),
    INDEX `total_hit`(`total_hit`),
    PRIMARY KEY (`content_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bn_mobile_ads` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `type` INTEGER UNSIGNED NULL DEFAULT 1,
    `page` INTEGER UNSIGNED NULL,
    `position` INTEGER UNSIGNED NULL DEFAULT 1,
    `dfp_header_code` TEXT NULL,
    `code` LONGTEXT NULL,
    `mobile_image_path` VARCHAR(255) NULL,
    `external_link` VARCHAR(255) NULL,
    `start_time` DATETIME(0) NULL,
    `end_time` DATETIME(0) NULL,
    `status` INTEGER NULL DEFAULT 1,
    `deletable` INTEGER NULL DEFAULT 1,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bn_position_fixed` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `position_fix` INTEGER NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bn_subcategories` (
    `subcat_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `cat_id` INTEGER NOT NULL,
    `subcat_name` VARCHAR(100) NOT NULL,
    `subcat_name_bn` VARCHAR(100) NOT NULL,
    `subcat_slug` VARCHAR(100) NOT NULL,
    `subcat_meta_keyword` VARCHAR(255) NULL,
    `subcat_meta_description` TEXT NULL,
    `subcat_position` INTEGER NOT NULL DEFAULT 0,
    `status` INTEGER NOT NULL DEFAULT 1,
    `deletable` INTEGER NOT NULL DEFAULT 1,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`subcat_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bn_tags` (
    `tag_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `tag_type` INTEGER NULL DEFAULT 1,
    `tag_name` VARCHAR(255) NOT NULL,
    `tag_slug` VARCHAR(255) NOT NULL,
    `description` TEXT NULL,
    `img_path` VARCHAR(255) NULL,
    `approval` INTEGER NOT NULL DEFAULT 2,
    `deletable` INTEGER NOT NULL DEFAULT 1,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    UNIQUE INDEX `tags_tag_name_unique`(`tag_name`),
    UNIQUE INDEX `tags_tag_slug_unique`(`tag_slug`),
    PRIMARY KEY (`tag_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bn_video_categories` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `slug` VARCHAR(255) NULL,
    `name_bn` VARCHAR(255) NULL,
    `meta_keywords` VARCHAR(255) NULL,
    `meta_description` TEXT NULL,
    `og_img_path` VARCHAR(255) NULL,
    `position` INTEGER NULL,
    `user_id` INTEGER NULL,
    `status` INTEGER NULL DEFAULT 1,
    `deletable` INTEGER NULL DEFAULT 1,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bn_video_positions` (
    `position_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `position_name` VARCHAR(255) NOT NULL,
    `cat_id` INTEGER NULL,
    `subcat_id` INTEGER UNSIGNED NULL,
    `video_ids` TEXT NULL,
    `total_video` INTEGER NULL,
    `deletable` INTEGER NOT NULL DEFAULT 1,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`position_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bn_videos` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `cat_id` INTEGER NULL,
    `type` INTEGER NULL,
    `title` VARCHAR(255) NULL,
    `code` VARCHAR(255) NULL,
    `img_bg_path` VARCHAR(255) NULL,
    `img_sm_path` VARCHAR(255) NULL,
    `img_xs_path` VARCHAR(255) NULL,
    `link` VARCHAR(255) NULL,
    `meta_keywords` VARCHAR(255) NULL,
    `meta_description` TEXT NULL,
    `user_id` INTEGER UNSIGNED NULL,
    `target` INTEGER UNSIGNED NOT NULL DEFAULT 1,
    `is_live` INTEGER NOT NULL DEFAULT 0,
    `status` INTEGER NULL DEFAULT 1,
    `deletable` INTEGER NULL DEFAULT 1,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `countries` (
    `country_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `country_name` VARCHAR(100) NOT NULL,
    `country_name_bn` VARCHAR(100) NOT NULL,
    `country_slug` VARCHAR(100) NOT NULL,
    `deletable` INTEGER NOT NULL DEFAULT 1,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`country_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `districts` (
    `district_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `division_id` INTEGER NOT NULL,
    `district_name` VARCHAR(100) NOT NULL,
    `district_name_bn` VARCHAR(100) NOT NULL,
    `district_slug` VARCHAR(100) NOT NULL,
    `district_title` TEXT NULL,
    `meta_description` TEXT NULL,
    `deletable` INTEGER NOT NULL DEFAULT 1,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`district_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `divisions` (
    `division_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `division_name` VARCHAR(100) NOT NULL,
    `division_name_bn` VARCHAR(100) NOT NULL,
    `division_slug` VARCHAR(100) NOT NULL,
    `deletable` INTEGER NOT NULL DEFAULT 1,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`division_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `elections` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NULL,
    `total_center` INTEGER NULL,
    `casted_center` INTEGER NULL,
    `party_one_name` VARCHAR(255) NULL,
    `party_two_name` VARCHAR(255) NULL,
    `party_one_logo` VARCHAR(255) NULL,
    `party_two_logo` VARCHAR(255) NULL,
    `party_one_votes` INTEGER UNSIGNED NULL,
    `party_two_votes` INTEGER UNSIGNED NULL,
    `status` INTEGER NULL DEFAULT 1,
    `deletable` INTEGER NULL DEFAULT 1,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `epaper_pages` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `epaper_id` INTEGER UNSIGNED NOT NULL,
    `img_path` VARCHAR(255) NULL,
    `img_thumb_path` VARCHAR(255) NULL,
    `img_large_path` VARCHAR(255) NULL,
    `page_no` INTEGER NOT NULL,
    `user_id` INTEGER UNSIGNED NOT NULL,
    `deletable` INTEGER NULL DEFAULT 1,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `epapers` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `paper_date` DATE NULL,
    `total_page` INTEGER NULL,
    `meta_keywords` VARCHAR(255) NULL,
    `meta_description` TEXT NULL,
    `og_img_path` VARCHAR(255) NULL,
    `user_id` INTEGER NULL,
    `status` INTEGER NULL DEFAULT 1,
    `deletable` INTEGER NULL DEFAULT 1,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `magazine_pages` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `magazine_id` INTEGER UNSIGNED NOT NULL,
    `img_path` VARCHAR(255) NULL,
    `img_thumb_path` VARCHAR(255) NULL,
    `img_large_path` VARCHAR(255) NULL,
    `counter` INTEGER NOT NULL,
    `user_id` INTEGER UNSIGNED NOT NULL,
    `deletable` INTEGER NULL DEFAULT 1,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `magazines` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `total_page` INTEGER NULL,
    `meta_keywords` VARCHAR(255) NULL,
    `meta_description` TEXT NOT NULL,
    `og_img_path` VARCHAR(255) NULL,
    `user_id` INTEGER NULL,
    `status` INTEGER NULL DEFAULT 1,
    `deletable` INTEGER NULL DEFAULT 1,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `manual_documents` (
    `doc_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `doc_path` VARCHAR(255) NOT NULL,
    `deletable` INTEGER NOT NULL DEFAULT 1,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`doc_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `manual_photos` (
    `photo_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `img_path` VARCHAR(255) NOT NULL,
    `deletable` INTEGER NOT NULL DEFAULT 1,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`photo_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mis_users` (
    `user_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_type` INTEGER NOT NULL,
    `admin_id` INTEGER NULL,
    `dept_type` INTEGER NOT NULL,
    `user_name` VARCHAR(255) NOT NULL,
    `user_name_bn` VARCHAR(255) NULL,
    `user_slug` VARCHAR(255) NOT NULL,
    `user_initial` VARCHAR(255) NOT NULL,
    `user_initial_bn` VARCHAR(255) NULL,
    `user_bio` TEXT NULL,
    `user_bio_bn` TEXT NULL,
    `img_path` VARCHAR(255) NULL,
    `deletable` INTEGER NOT NULL DEFAULT 1,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `monthly_folders` (
    `folder_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `folder_name` VARCHAR(30) NOT NULL,
    `deletable` INTEGER NOT NULL DEFAULT 1,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`folder_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `p_album_positions` (
    `position_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `position_name` VARCHAR(255) NOT NULL,
    `position_slug` VARCHAR(255) NOT NULL,
    `cat_id` INTEGER NULL,
    `special_cat_id` INTEGER UNSIGNED NULL,
    `subcat_id` INTEGER UNSIGNED NULL,
    `content_ids` TEXT NULL,
    `total_content` INTEGER UNSIGNED NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `deletable` INTEGER NOT NULL DEFAULT 1,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`position_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `p_albums` (
    `album_id` INTEGER NOT NULL AUTO_INCREMENT,
    `cat_id` INTEGER NOT NULL,
    `subcat_id` INTEGER NULL,
    `album_name` VARCHAR(255) NOT NULL,
    `short_description` TEXT NULL,
    `album_details` TEXT NULL,
    `photographer_name` VARCHAR(255) NULL,
    `tag` VARCHAR(255) NULL,
    `status` INTEGER NOT NULL DEFAULT 2,
    `total_hit` INTEGER NOT NULL DEFAULT 0,
    `deletable` INTEGER NOT NULL DEFAULT 1,
    `user_id` INTEGER NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`album_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `p_categories` (
    `cat_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `cat_name` VARCHAR(100) NOT NULL,
    `cat_name_bn` VARCHAR(100) NOT NULL,
    `cat_slug` VARCHAR(100) NOT NULL,
    `cat_meta_keyword` VARCHAR(255) NULL,
    `cat_meta_description` TEXT NULL,
    `cat_position` INTEGER NOT NULL DEFAULT 0,
    `top_menu` INTEGER NOT NULL DEFAULT 2,
    `footer_menu` INTEGER NOT NULL DEFAULT 2,
    `status` INTEGER NOT NULL DEFAULT 1,
    `deletable` INTEGER NOT NULL DEFAULT 1,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`cat_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `p_subcategories` (
    `subcat_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `cat_id` INTEGER NOT NULL,
    `subcat_name` VARCHAR(100) NOT NULL,
    `subcat_name_bn` VARCHAR(100) NOT NULL,
    `subcat_slug` VARCHAR(100) NOT NULL,
    `subcat_meta_keyword` VARCHAR(255) NULL,
    `subcat_meta_description` TEXT NULL,
    `subcat_position` INTEGER NOT NULL DEFAULT 0,
    `status` INTEGER NOT NULL DEFAULT 1,
    `deletable` INTEGER NOT NULL DEFAULT 1,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`subcat_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `password_resets` (
    `email` VARCHAR(255) NOT NULL,
    `token` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP(0) NULL,

    INDEX `password_resets_email_index`(`email`),
    INDEX `password_resets_token_index`(`token`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `site_settings` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `site_name` VARCHAR(255) NULL,
    `logo` VARCHAR(255) NULL,
    `logo_header` INTEGER NOT NULL DEFAULT 2,
    `logo_footer` INTEGER NOT NULL DEFAULT 2,
    `title` TEXT NULL,
    `meta_keywords` TEXT NULL,
    `meta_description` TEXT NULL,
    `og_image` VARCHAR(255) NULL,
    `social_links` TEXT NULL,
    `editor_meta` TEXT NULL,
    `address` TEXT NULL,
    `copyright` TEXT NULL,
    `show_special` INTEGER NOT NULL DEFAULT 2,
    `special_title` VARCHAR(255) NULL,
    `special_link` VARCHAR(255) NULL,
    `show_live_tv` INTEGER NOT NULL DEFAULT 2,
    `show_video_live_tv` INTEGER NOT NULL DEFAULT 2,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `surveys` (
    `survey_id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` TEXT NOT NULL,
    `from_date` DATE NULL,
    `to_date` DATE NOT NULL,
    `ha` INTEGER NOT NULL DEFAULT 0,
    `na` INTEGER NOT NULL DEFAULT 0,
    `no_comment` INTEGER NOT NULL DEFAULT 0,
    `status` INTEGER NOT NULL DEFAULT 1,
    `deletable` INTEGER NOT NULL DEFAULT 1,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`survey_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `upozillas` (
    `upozilla_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `district_id` INTEGER NOT NULL,
    `division_id` INTEGER NOT NULL,
    `upozilla_name` VARCHAR(255) NOT NULL,
    `upozilla_name_bn` VARCHAR(255) NOT NULL,
    `upozilla_title` TEXT NULL,
    `upozilla_slug` VARCHAR(255) NOT NULL,
    `meta_description` TEXT NULL,
    `deletable` INTEGER NOT NULL DEFAULT 1,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`upozilla_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `designation` VARCHAR(255) NULL,
    `username` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `email_verified_at` TIMESTAMP(0) NULL,
    `password` VARCHAR(255) NOT NULL,
    `two_factor_secret` TEXT NULL,
    `two_factor_recovery_codes` TEXT NULL,
    `role` INTEGER NOT NULL,
    `bn_cat_ids` VARCHAR(255) NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `visibility` INTEGER NOT NULL DEFAULT 1,
    `deletable` INTEGER NOT NULL DEFAULT 1,
    `remember_token` VARCHAR(100) NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    UNIQUE INDEX `admins_email_unique`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `p_galleries` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `album_id` INTEGER NOT NULL,
    `photo` TEXT NOT NULL,
    `photo_capture` TEXT NULL,
    `feature_image` TEXT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;


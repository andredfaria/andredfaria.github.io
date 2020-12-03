<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'andrxc15_wp388' );

/** MySQL database username */
define( 'DB_USER', 'andrxc15_wp388' );

/** MySQL database password */
define( 'DB_PASSWORD', '!1S0.U7pL8' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'wslk9pzxkbimwyet7duflrd1c602re2jsglnwcjypyxejfdcn757swxdqalv912n' );
define( 'SECURE_AUTH_KEY',  'hx2dqf7l1yygzztpgbvxszlwryrotfzagbcfyco6alckulthqx2qmrtddgka5j6t' );
define( 'LOGGED_IN_KEY',    's1lawbnx1l6gf3tfn3bu8z9jodvl7oemx1v0d6ajeear1gabamrstkzxmzj94u8e' );
define( 'NONCE_KEY',        'mugmcstu9jx2mxxscq5vswkpjc7h96cpkyyjdjh5bbeef8ealz4cnhtxseu3xogq' );
define( 'AUTH_SALT',        'o3ugbznlghuxvzzqml3xsosicvtn0sxbbozuepfzmbmyfoh1npwcm3vbvivvhbgs' );
define( 'SECURE_AUTH_SALT', 'rjdp7kyyfgpj3sb45bspgjt06nxdewpusayppsfoz0b32zw9qxukzj0jtxu1gaqv' );
define( 'LOGGED_IN_SALT',   'zldgaoeoorox95kjjqhdd2hqhjrmijujkeubobm9430xklvnmxrwdcvrnsxnwnup' );
define( 'NONCE_SALT',       '41qokhiicfyxd4qvv8iwmmjauughdvyikgugizfnddjrwrzl9e9u1sjzu66ttb3g' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wpng_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );

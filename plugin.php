<?php
/**
 * Plugin Name:       Block Dev
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 6.0
 * Requires PHP:      7.4
 * Version:           1.0.0
 * Author:            Reedwanul Haque
 * Author URI:        https://profiles.wordpress.org/reedwanul
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       block-dev
 * Domain Path:       /languages
 */
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

if( ! class_exists( 'Blockdev_Blocks' ) ) {

	final class Blockdev_Blocks {

		protected static $instance = null;

		/**
		 * Constructor
		 * @return void
		 */
		public function __construct() {
			$this->define_constants();
			$this->includes();
		}

		/**
		 * Definte the plugin constants
		 * @return void
		 */
		public function define_constants() {
			define( 'BLOCKDEV_VERSION', '1.0.0' );
			define( 'BLOCKDEV_DIR', __DIR__ );
			define( 'BLOCKDEV_URL', plugin_dir_url( __FILE__ ) );
			define( 'BLOCKDEV_PATH', plugin_dir_path( __FILE__ ) );
		}

		/**
		 * Include all the required files
		 * @return void
		 */
		public function includes() {
			require_once __DIR__ . '/inc/loader.php';
		}

		/**
		 * Initialize the plugin
		 * @return \Blockdev_Blocks
		 */
		public static function init() {
			if( is_null( self::$instance ) ) {
				self::$instance = new self();
			}
			return self::$instance;
		}
	}
}

/**
 * Initialize the plugin
 * @return \Blockdev_Blocks
 */
function blockdev_blocks_init() {
	return Blockdev_Blocks::init();
}

// kick-off the plugin
blockdev_blocks_init();

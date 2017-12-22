<?php

/**
 * Implements hook_ckeditor_plugin().
 */
function ckeditor_bylawlist() {
  return array(
    'bylawlist' => array(
      'name' => 'bylawlist',
      'desc' => t('CKEditor Accessibility Checker'),
      'path' => libraries_get_path('bylawlist', TRUE) . '/',
      'buttons' => array(
        'Bylawlist' => array(
          'icon' => 'icons/bylawlist.png',
          'label' => t('Bylaw List'),
        ),
      ),
    ),
  );
}

/**
 * Implements hook_libraries_info().
 */
function ckeditor_bylawlist_info() {
  return array(
    'bylawlist' => array(
      'name' => 'CKEditor Bylaw List',
    ),
  );
}
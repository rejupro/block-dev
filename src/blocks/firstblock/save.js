/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';

/**
 * Save function
 */

export default function save({ attributes }) {
	const { text, tags } = attributes;

	return (
		<>
			<div
				{...useBlockProps.save({
					className: 'rejutestinghere',
				})}
			>
				<RichText.Content tagName={tags} value={text} />
			</div>
		</>
	);
}

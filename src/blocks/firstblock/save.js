/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';

/**
 * Save function
 */

export default function save({ attributes }) {
	const { text, tags, textcolor, backgroundcolor } = attributes;

	return (
		<>
			<div
				{...useBlockProps.save({
					className: 'rejutestinghere',
				})}
				style={{
					background: backgroundcolor,
				}}
			>
				<RichText.Content
					tagName={tags}
					value={text}
					style={{
						color: textcolor,
					}}
				/>
			</div>
		</>
	);
}

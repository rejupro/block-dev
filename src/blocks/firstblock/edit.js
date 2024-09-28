/**
 * WordPress dependencies
 */
const { Fragment, useEffect } = wp.element;
import {
	InspectorControls,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

// editor style
import './editor.scss';

/**
 * Internal dependencies
 */

/**
 * Edit function
 */

export default function Edit({ attributes, setAttributes, clientId }) {
	const { text, tags } = attributes;
	return (
		<Fragment>
			{/* Inspector Controls in the sidebar */}
			<InspectorControls>
				<PanelBody
					title={('Post Title', 'blockdev')}
					initialOpen={true}
				>
					<TextControl
						__nextHasNoMarginBottom
						label="Title"
						help="Enter some text"
						value={text}
						onChange={(value) =>
							setAttributes({
								text: value,
							})
						}
					/>
					<SelectControl
						label="Size"
						value={tags}
						options={[
							{ label: 'h1', value: 'h1' },
							{ label: 'h2', value: 'h2' },
							{ label: 'h3', value: 'h3' },
							{ label: 'h4', value: 'h4' },
							{ label: 'h5', value: 'h5' },
							{ label: 'h6', value: 'h6' },
							{ label: 'p', value: 'p' },
						]}
						onChange={(value) =>
							setAttributes({
								tags: value,
							})
						}
					/>
				</PanelBody>
			</InspectorControls>
			<div
				{...useBlockProps({
					className: 'rejutestinghere',
				})}
			>
				<RichText
					tagName={tags}
					value={text}
					onChange={(value) =>
						setAttributes({
							text: value,
						})
					}
					placeholder={__('Heading…')}
				/>
			</div>
		</Fragment>
	);
}
